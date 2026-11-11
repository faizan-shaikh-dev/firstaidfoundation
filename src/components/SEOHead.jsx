import { useEffect } from 'react';

export function SEOHead({ title, description, canonicalPath = '/' }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | First Aid Foundation`;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description, canonicalPath]);

  return null;
}

export default SEOHead;

