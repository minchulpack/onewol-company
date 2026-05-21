import { motion, useReducedMotion, type Variants } from 'motion/react';
import { type PropsWithChildren } from 'react';
import { fadeUp, stagger } from '../../lib/motion';

interface RevealProps {
  variants?: Variants;
  as?: 'div' | 'section' | 'ul' | 'li' | 'article' | 'header';
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  variants = fadeUp,
  as = 'div',
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: PropsWithChildren<RevealProps>) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) {
    const Tag = as as 'div';
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  as = 'div',
  className,
  amount = 0.15,
}: PropsWithChildren<Omit<RevealProps, 'variants' | 'delay'>>) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) {
    const Tag = as as 'div';
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={stagger}
    >
      {children}
    </MotionTag>
  );
}
