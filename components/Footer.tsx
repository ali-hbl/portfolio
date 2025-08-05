// export default function Footer() {
//   return (
//     <footer className="mb-10 px-4 text-center text-gray-500">
//       <small className="mb-2 block text-xs">© {new Date().getFullYear()} Ali H. — Tous droits réservés.</small>
//       <p className="text-xs">Créé avec passion et soin, en utilisant les meilleures technologies web modernes.</p>
//       <p className="mt-1 text-xs">
//         <a href="#contact" className="text-blue-800 hover:underline dark:text-blue-400">
//           Me contacter
//         </a>
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="mb-2 block text-xs">Copyright © {new Date().getFullYear()} Ali — Tous droits réservés.</p>

      <p className="text-xs">Créé avec passion et soin, en utilisant les meilleures technologies web modernes.</p>

      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a href="mailto:contact@aely.dev" className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ali-haboula"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:underline dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/ally.guitar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:underline dark:hover:text-blue-400"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
