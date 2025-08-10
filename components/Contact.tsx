'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './SectionHeading';
import SubmitBtn from './SubmitBtn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        <span className="normal-case">Contactez-moi</span>
      </SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Vous avez un projet ou une idée à concrétiser? Écrivez-moi directement à{' '}
        <a className="underline" href="mailto:contact@aely.dev">
          contact@aely.dev
        </a>{' '}
        ou utilisez ce formulaire.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Message envoyé avec succès!');
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          type="email"
          name="email"
          placeholder="Votre e-mail"
          maxLength={200}
          required
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Votre message"
          maxLength={5000}
          required
        />
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
