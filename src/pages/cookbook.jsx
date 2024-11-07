import React from 'react';
import Layout from '@theme/Layout';

export default function Cookbook() {
  return (
    <Layout
      title="SyntaxFlow 语言手册" 
      description="SyntaxFlow 语言的详细使用指南"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <div className="pdf-viewer">
              <div 
                className="text-center" 
                style={{ 
                  marginBottom: '30px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <a 
                  href="/pdf/syntaxflow-cookbook.pdf"
                  download
                  className="button button--primary button--lg"
                  style={{
                    fontSize: '1.2rem',
                    padding: '12px 36px'
                  }}
                >
                  下载完整手册 PDF
                </a>
              </div>
              <iframe
                src="/pdf/syntaxflow-cookbook.pdf"
                style={{
                  width: 'calc(100% - 96px)', // 左右各留48px
                  height: 'calc(100vh - 160px)', // 减少头部和按钮占用的空间
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '24px',
                  margin: '0 48px',
                  backgroundColor: '#fff'
                }}
                title="SyntaxFlow 语言手册"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}