import React, { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`../assets/icons/${iconName}.svg`)
        ).ReactComponent;
      } catch (err) {
        setError(err);
        if (err instanceof Error) {
          console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, Icon: importedIconRef.current };
}
