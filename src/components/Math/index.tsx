import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import './katex-custom.css';
import html2canvas from "html2canvas"

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
  const [isImageCopied, setIsImageCopied] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [toast, setToast] = useState<{message: string, visible: boolean}>({message: '', visible: false});

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

  const showToast = (message: string) => {
    setToast({message, visible: true});
    setTimeout(() => {
      setToast({message: '', visible: false});
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(math);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleImageCopy = async () => {
    if (!containerRef.current) return;
    
    setIsImageLoading(true);
    setTimeout(async () => {
      try {
        // 创建一个临时容器来包裹原始内容
        const tempContainer = document.createElement('div');
        tempContainer.style.padding = '12px 0'; // 上下增加12px内边距
        const clone = containerRef.current?.cloneNode(true);
        if (!clone) {
          throw new Error('无法克隆节点');
        }
        tempContainer.appendChild(clone);
        
        // 确保临时容器被添加到文档中，以便html2canvas可以正确访问
        document.body.appendChild(tempContainer);

        const canvas = await html2canvas(tempContainer, {
          backgroundColor: null,
          scale: 2,
        });

        // 处理完成后，从文档中移除临时容器
        document.body.removeChild(tempContainer);
        
        canvas.toBlob(async (blob) => {
          if (blob) {
            try {
              await navigator.clipboard.write([
                new ClipboardItem({
                  'image/png': blob
                })
              ]);
              setIsImageCopied(true);
              showToast('图片已复制到剪贴板');
              setTimeout(() => {
                setIsImageCopied(false);
              }, 2000);
            } catch (err) {
              console.error('复制图片失败:', err);
              showToast('复制图片失败，请重试');
            }
          }
        }, 'image/png');
      } catch (err) {
        console.error('生成图片失败:', err);
        showToast('生成图片失败，请重试');
      } finally {
        setIsImageLoading(false);
      }
    }, 500); // 延迟 0.5 秒后开始复制
  };

  return (
    <div
      className={`katex-wrapper ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: inline ? '4px' : '8px',
        margin: inline ? '0' : '0 8px',
        border: isHovered ? '2px solid #4a90e2' : '1px solid transparent',
        borderRadius: '4px',
        display: inline ? 'inline-block' : 'block',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 8px rgba(74, 144, 226, 0.3)' : 'none',
      }}
    >
      {toast.visible && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px',
          zIndex: 1000,
          pointerEvents: 'none',
        }}>
          {toast.message}
        </div>
      )}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          display: 'flex',
          gap: '8px',
          zIndex: 1,
        }}>
          <button
            onClick={handleImageCopy}
            disabled={isImageLoading}
            style={{
              padding: '4px 12px',
              background: isImageCopied ? '#52c41a' : isImageLoading ? '#d9d9d9' : '#f5f5f5',
              border: `1px solid ${isImageCopied ? '#52c41a' : isImageLoading ? '#d9d9d9' : '#e0e0e0'}`,
              borderRadius: '4px',
              cursor: isImageLoading ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              color: isImageCopied ? '#fff' : isImageLoading ? '#999' : '#666',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              opacity: isImageLoading ? 0.7 : 1,
            }}
          >
            {isImageCopied ? (
              <>
                <span style={{ fontSize: '14px' }}>✓</span>
                已复制图片
              </>
            ) : isImageLoading ? (
              <>
                <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
                导出中...
              </>
            ) : (
              '复制为图片'
            )}
          </button>
          <button
            onClick={handleCopy}
            style={{
              padding: '4px 12px',
              background: isCopied ? '#52c41a' : '#f5f5f5',
              border: `1px solid ${isCopied ? '#52c41a' : '#e0e0e0'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
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
        </div>
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
