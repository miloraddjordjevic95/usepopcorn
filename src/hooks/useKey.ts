import { useEffect } from "react";

function useKey(key, action): void {
    useEffect(
        () => {
            function callback(event: KeyboardEvent): void {
                if (event.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            }

            document.addEventListener("keydown", callback);

            return () =>  {
                document.removeEventListener("keydown", callback);
            };
        },
        [action, key]
    );
}

export {useKey};
