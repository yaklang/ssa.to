import React from "react";
export default function IRPipeline() {
  return (
    <figure className="academic-pipeline">
      <div className="academic-pipeline-flow">
        <div>
          <small>01 / INPUT</small>
          <strong>源程序</strong>
          <span>Java · Go · PHP · …</span>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <small>02 / REPRESENTATION</small>
          <strong>SSA IR</strong>
          <span>值 · 基本块 · 依赖关系</span>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <small>03 / ANALYSIS</small>
          <strong>SyntaxFlow</strong>
          <span>查询 · 过滤 · 数据流追踪</span>
        </div>
      </div>
      <figcaption>
        图 2.1 ·
        多语言程序进入统一中间表示，再由规则描述分析问题。编译结果可保存为
        Program，供后续查询复用。
      </figcaption>
    </figure>
  );
}
