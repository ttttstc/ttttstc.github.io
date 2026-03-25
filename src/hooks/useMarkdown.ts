import { useState, useEffect } from 'react';

export const useMarkdown = (path: string) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(path)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${res.status}`);
        }
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  return { content, loading, error };
};
