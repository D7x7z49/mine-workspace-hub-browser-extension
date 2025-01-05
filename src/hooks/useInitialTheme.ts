import { useEffect, useState } from 'react';
import { MineTheme, useConfigStore } from '@workspacehub/config/useConfigStore';

export const useInitialTheme = (): MineTheme | null => {
  const { theme } = useConfigStore();
  const [initialTheme, setThemeConfig] = useState<MineTheme | null>(null);

  useEffect(() => {
    const fetchThemeConfig = async () => {
      const config = Object.freeze({ ...theme });
      setThemeConfig(config);
    };

    fetchThemeConfig();
  }, [initialTheme, theme]);

  return initialTheme;
};
