import { SignInPage, SignUpPage } from './pages/auth';
import { ErrorPage } from './pages/error';
import { ChatPage } from './pages/chat';
import { ProfilePage } from './pages/profile';

import './index.css';

console.log('Hello, Praktikum!');

const test = new ProfilePage({
  mode: 'write',
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app')?.prepend(test.getContent());
  // console.log('main ', document.getElementById('main'))
});
