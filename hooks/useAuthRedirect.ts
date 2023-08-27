import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const useAuthRedirect = async () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
};

export default useAuthRedirect;
