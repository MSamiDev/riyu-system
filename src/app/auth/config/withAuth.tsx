// withAuth.js
'use client';
import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'
import { useAuth } from '@/app/auth/config/AuthContext';

const withAuth = (WrappedComponent: any) => {
  const Wrapper: any = (props: any) => {
    const { user, loading } = useAuth();
    // const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        // router.push('/login');
        console.log('redirecting to login');
        redirect('/auth/signin');

      }
    }, [user, loading, redirect]);

    if (loading || !user) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;