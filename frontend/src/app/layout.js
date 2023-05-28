import './globals.css';

export const metadata = {
  title: 'Frontend ISW',
  description: 'Template para proyectos de frontend en ISW',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
