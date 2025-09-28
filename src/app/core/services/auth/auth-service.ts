import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
	Auth,
	createUserWithEmailAndPassword,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
	user,
} from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { from, map, of, switchMap } from 'rxjs';

export type AuthProvider = 'github' | 'google';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly fa = inject(Auth);
	user$ = user(this.fa);
	userSignal = toSignal(this.user$);
	private readonly fs = inject(Firestore);

	register(email: string, name: string, password: string) {
		return from(createUserWithEmailAndPassword(this.fa, email, password)).pipe(
			switchMap((uc) =>
				from(
					setDoc(doc(this.fs, `users/${uc.user.uid}`), {
						uid: uc.user.uid,
						email: uc.user.email,
						displayName: name,
						createdAt: Date.now(),
						provider: 'password',
						role: 'user',
					}),
				).pipe(
					map(() => uc.user),
					switchMap((user) =>
						from(updateProfile(user, { displayName: name })).pipe(map(() => uc.user)),
					),
				),
			),
		);
	}

	login(email: string, password: string) {
		return from(signInWithEmailAndPassword(this.fa, email, password)).pipe(
			map((uc) => uc.user),
		);
	}

	logout() {
		return from(signOut(this.fa));
	}

	loginWithOAuth(AuthProvider: AuthProvider) {
		const provider =
			AuthProvider === 'github' ?
				new GithubAuthProvider()
			:	new GoogleAuthProvider();

		return from(signInWithPopup(this.fa, provider)).pipe(
			switchMap(({ user }) =>
				from(getDoc(doc(this.fs, `users/${user.uid}`))).pipe(
					switchMap((ss) =>
						!ss.exists() ?
							from(
								setDoc(ss.ref, {
									uid: user.uid,
									email: user.email,
									displayName: user.displayName,
									photoURL: user.photoURL,
									createdAt: Date.now(),
									provider: AuthProvider,
									role: 'user',
								}),
							).pipe(map(() => user))
						:	of(user),
					),
				),
			),
		);
	}
}
