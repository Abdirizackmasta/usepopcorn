import { useEffect } from "react";

export function UseKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action?.();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
