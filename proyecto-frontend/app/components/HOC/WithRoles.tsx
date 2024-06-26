'use client'

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function hasRequiredPermissions(requiredPermissions: string[], userPermissions: string[]): boolean {
  return requiredPermissions.some((permissions) =>
    userPermissions.includes(permissions)
  );
}

export function withRoles(Component: any, requiredPermissions: string[], goBackRoute: string) {
  return function WithRolesWrapper(props: any) {
    const router = useRouter();
    const [hasPermission, setHasPermission] = useState(false);


    useEffect(() => {
      const token = localStorage.getItem('accessToken');

      let userPermissions: string[] = [];
      if (token) {
        const decodedToken: { role: string[] } = jwtDecode(token);

        if (decodedToken.role) {
          userPermissions = decodedToken.role;
        }
      }

      if (hasRequiredPermissions(requiredPermissions, userPermissions)) {
        setHasPermission(true);
      } else {
        router.push(goBackRoute);
      }
    }, [router, requiredPermissions, goBackRoute]);

    if (!hasPermission) {
      return null;
    }

    return <Component {...props} />;
  }
}