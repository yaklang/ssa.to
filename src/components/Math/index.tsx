import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathProps {
  /**
   * LaTeX 数学公式
   */
  math: string;
  /**
   * 是否为行内公式
   * @default false
   */
  inline?: boolean;
  /**
   * 错误回调
   */
  onError?: (error: any) => void;
  /**
   * KaTeX 选项
   */
  options?: katex.KatexOptions;
  /**
   * 自定义类名
   */
  className?: string;
}

const defaultOptions: katex.KatexOptions = {
  throwOnError: false,
  strict: false,
  trust: false,
  macros: {
    // 可以在这里定义自定义宏
    "\\RR": "\\mathbb{R}",
    "\\NN": "\\mathbb{N}",
    "\\ZZ": "\\mathbb{Z}",
  },
};

const Math: React.FC<MathProps> = ({
  math,
  inline = false,
  onError,
  options = {},
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      katex.render(math, containerRef.current, {
        ...defaultOptions,
        ...options,
        displayMode: !inline,
      });
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error('KaTeX Error:', error);
        // 在错误时显示原始公式
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, inline, options, onError]);

  return (
    <div
      ref={containerRef}
      className={`katex-container ${inline ? 'inline' : 'block'} ${className}`}
      style={{
        display: inline ? 'inline-block' : 'block',
      }}
    />
  );
};

export default Math;

export const InlineMath: React.FC<Omit<MathProps, 'inline'>> = (props) => {
  return <Math {...props} inline={true} />;
};

export const BlockMath: React.FC<Omit<MathProps, 'inline'>> = (props) => {
  return <Math {...props} inline={false} />;
};
