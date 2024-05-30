'use client'

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

function hasRequiredPermissions(requiredPermissions: string[], userPermissions: string[]): boolean {
  return requiredPermissions.some((permissions) =>
    userPermissions.includes(permissions)
  );
}

export function withRoles(Component: any, requiredPermissions: string[], goBackRoute: string) {
  return function WithRolesWrapper(props: any) {
    const router = useRouter();

    const token = localStorage.getItem('accessToken');

    let userPermissions : string[] = [];
    if (token) {
      const decodedToken: { role: string[] } = jwtDecode(token);

      if (decodedToken.role) {
        userPermissions = decodedToken.role;
      }
    }


    const hasPermission = hasRequiredPermissions(requiredPermissions, userPermissions)
    if (hasPermission) {
      return <Component {...props} />
    } else {
      router.push(goBackRoute)
      return null
    }
  }
}