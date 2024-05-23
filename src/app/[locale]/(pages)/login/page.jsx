import Link from 'next/link';
import React from 'react'
import { useTranslations } from 'next-intl';

const Login = () => {
  const t = useTranslations('LoginPage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/">{t('buttonText')}</Link>
    </div>
  )
}

export default Login;
