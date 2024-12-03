import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import './katex-custom.css';

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
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, inline, options, onError]);

  const handleCopy = () => {
    navigator.clipboard.writeText(math);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`katex-wrapper ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '8px',
        border: isHovered ? '2px solid #4a90e2' : '1px solid transparent',
        borderRadius: '4px',
        display: inline ? 'inline-block' : 'block',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 8px rgba(74, 144, 226, 0.3)' : 'none',
      }}
    >
      {isHovered && (
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            padding: '4px 12px',
            background: isCopied ? '#52c41a' : '#f5f5f5',
            border: `1px solid ${isCopied ? '#52c41a' : '#e0e0e0'}`,
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            zIndex: 1,
            color: isCopied ? '#fff' : '#666',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {isCopied ? (
            <>
              <span style={{ fontSize: '14px' }}>✓</span>
              已复制
            </>
          ) : (
            '复制'
          )}
        </button>
      )}
      <div
        ref={containerRef}
        className={`katex-container ${inline ? 'inline' : 'block'} ${className}`}
      />
    </div>
  );
};

export default Math;

export const InlineMath: React.FC<Omit<MathProps, 'inline'>> = (props) => {
  return <Math {...props} inline={true} />;
};

export const BlockMath: React.FC<Omit<MathProps, 'inline'>> = (props) => {
  return <Math {...props} inline={false} />;
};
