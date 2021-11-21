import { useEffect, useState } from "react";

export default function useIsSafari() {
  const [get, set] = useState(true);

  useEffect(() => {
    set(
      navigator.vendor.match(/apple/i) &&
        !navigator.userAgent.match(/crios/i) &&
        !navigator.userAgent.match(/fxios/i) &&
        !navigator.userAgent.match(/Opera|OPT\//)
    );
  });

  return get;
}
