import{o as e,s as t}from"./index-BnVNoRkQ.js";import{r as n,t as r}from"./SectionCard-M4gRMlvJ.js";import{t as i}from"./DemoDataNotice-CKGenyUf.js";import{i as a,n as o}from"./feedData-CDvx0cAp.js";var s=`# BuboPin News R4 Beta 试运行 — 2026-10-16

## 执行元数据

| 字段 | 值 |
|---|---|
| 真实运行序号 | 1 / 7 |
| 结论 | \`pass_after_remediation\` |
| 开始时间（Asia/Shanghai） | 2026-10-16 01:33:29 CST |
| 本地门禁结束时间（Asia/Shanghai） | 2026-10-16 07:07:07 CST（会话中断后接续，未重复运行） |
| Baseline SHA | \`64a30377041790a89d25236d21f63ea408958025\` |
| Current / record SHA | \`SELF\`：由 \`git log -1 --format=%H -- docs/beta-trial/runs/2026-10-16.md\` 派生 |
| PR #6 | Draft；baseline CI [Green](https://github.com/luckygood/DiseasePulse/actions/runs/38778313830/job/116571614595)；\`SELF\` CI 在推送后要求 Green |
| Preview SHA（预检） | \`95d7eb9a34f79f028117cbac0eadce8be5e4d46d\` |
| Preview SHA（闭环） | \`SELF\`；以线上 \`preview-source.json.integrationSha\` 实测并与 PR HEAD 比对 |

\`SELF\` 避免在提交内容中硬编码自身 SHA 造成不可解的自引用；本轮闭环条件是
包含本记录的提交、PR HEAD 与最终线上 \`integrationSha\` 三者相同。

## 输入与计数

| 项目 | 结果 |
|---|---|
| Canonical snapshot 数量 | 3：CKD、Obesity、Stroke 各 1 份，均为 2026-10-15 |
| 本轮新增 snapshot | \`null\`（reason: 运行开始时没有新的真实落盘快照；未构造输入） |
| Ingest report | 3 candidates；5 future catalysts；本轮未晋升 Golden |
| Candidate 状态计数 | 78 total：approved 14、already-published 29、rejected 4、pending 31、duplicate 0 |
| Source dry-run 最终计数 | 51 total：reachable 34、restricted 17、unreachable 0 |
| Event / Source / Milestone / Asset | 46 / 51 / 5 / 30 |
| 来源追溯 | Event 46/46；Milestone 5/5 |
| 运营发布时延 | \`null\`（reason: 未记录 \`firstPublishedAt\`；历史回填核验时延不代表 Beta 日常运营） |

## 门禁

| # | 门禁 | 首次结果 | 复验结果 | 证据/备注 |
|---:|---|---|---|---|
| 1 | \`research:ingest\` | pass | pass | 3 snapshots；Candidate Master 78；pending 31 |
| 2 | \`feed:build\` | pass | — | 46 verified events；0 ID warnings；0 pending revisions |
| 3 | \`feed:validate\` | pass | — | 46 events / 51 sources；0 errors / 0 warnings |
| 4 | \`milestones:validate\` | pass | — | 5 verified milestones；0 errors |
| 5 | \`assets:build\` | pass | — | 30 records；双向外键有效 |
| 6 | \`freshness:check\` | pass | — | 最新事件与核验均为 2026-10-15；pending window 为 null |
| 7 | \`quality:report\` | pass | — | 追溯 46/46 与 5/5；运营发布时延 null + reason |
| 8 | \`typecheck\` | pass | — | \`tsc --noEmit\` |
| 9 | \`test\` | pass | — | 15 files / 132 tests passed |
| 10 | \`build\` | pass | — | 84 known static routes；构建完成 |
| 11 | \`test:e2e\` | pass | — | 24 passed / 2 intentional skips；desktop + mobile |
| 12 | \`determinism:check\` | pass | — | 7 generated artifacts，两次重建字节一致 |
| 13 | \`beta:check\` | pass | — | 13/13 checks passed |

## 来源 dry-run 原始失败与修复

1. 首次：35 reachable / 14 restricted / 2 unreachable。唯一来源
   \`src-fda-zepbound-s041-20260826\` 与 \`src-viking-vk3019-20260624\` 暂时不可达，
   因而按规则阻断。
2. 第二次：34 reachable / 14 restricted / 3 unreachable。Viking 已恢复 200；
   FDA PDF 返回 406 或瞬时不可达。
3. 根因修复：将 HTTP 406（服务端拒绝自动访问）明确分类为 \`restricted\`，并新增
   单元测试；未写回 Source Registry、未放宽 404/5xx/网络失败的 \`unreachable\` 门禁。
4. 第三次（本根因最后一次）：34 reachable / 17 restricted / 0 unreachable，pass。

## 预览部署原始失败与修复

1. \`SELF\` 的首个受保护部署尝试在 CI Green 后停止：独立预览 base path 构建会重写
   tracked \`beta-experience-report.json\`，干净工作树门禁按设计拒绝推送。
2. 恢复并连续两次验证默认 base 的报告字节一致；提交实测报告变化。
3. 部署脚本改为在 CI 已全绿后只生成 ignored \`dist\` 与静态入口，不再用预览专属
   base path 覆盖基线报告。分支、Draft PR、HEAD、CI 和干净工作树门禁均保留。
4. 第二次部署推送了匹配的页面产物，但审计发现独立预览仓库中的
   \`quality-report.json\` 与 \`beta-experience-report.json\` 被遗漏；该部署不作为最终闭环。
5. 部署脚本补回两份已审计报告。修复提交的 CI Green 后才允许最终部署和线上冒烟；
   若失败，不把本轮标为通过。

## 线上冒烟

预检针对旧预览 SHA \`95d7eb9\`：River、Horizon、稳定 Event、Asset、Disease、
Search、About 均为 HTTP 200 且完成渲染；未知路径为 404；robots 为
\`noindex, nofollow\`；\`preview-source.json\` 为 200 且计数 46/51/5/30。

推送 \`SELF\` 后必须等待其 CI Green，再通过带分支、PR HEAD、CI 和干净工作树硬门禁的
\`npm run preview:deploy\` 从 \`SELF\` 重部署，并以 \`npm run preview:smoke\` 重验上述项目。
若该后置条件未满足，本记录的结论必须由后续修订改为 \`failed\`。

## 变化、失败与处置

- 实际数据变化：无；未增加 Event、Milestone、Disease，未修改任何 Golden 状态或 ID。
- 工程变化：建立 R4 审计/清单模板、质量时延语义、预览部署与冒烟硬门禁；修正 406 来源分类。
- 原始失败：来源 dry-run 的唯一来源不可达；首个预览部署因 tracked 报告漂移被门禁拒绝，证据如上保留。
- 修复与重试次数：同一根因 1 次代码修复、3 次全量 dry-run（达到上限后已停止重试）。
- 复验：全部 13 项门禁通过；来源最终 0 unreachable。
- Owner 待办：无新增；既有发布、索引、Brand Phase 2 与 Golden 晋升决定保持不变。

## 结论依据

本轮有真实输入盘点、来源网络检查、完整门禁和可追溯原始失败；失败经一次有测试的
分类修复后在第三次来源复验收敛，故结论为 \`pass_after_remediation\`，计入七次真实运行。
它不表示 Beta 已完成，也不表示生产已发布。

## 同日闭环复核（不增加真实运行次数）

| 字段 | 实测结果 |
|---|---|
| 最近同日复核（Asia/Shanghai） | 2026-10-16 09:32:22 +08:00 |
| 复核区间（Asia/Shanghai） | 2026-10-16 09:31:15 至 09:32:22 +08:00 |
| 工作树 / 分支 | 干净；\`codex/bubopin-news-v1-integration\` |
| 实测 PR HEAD / preview integrationSha | \`41166d8f7d0ec98f820e80ecb7e7b80d811625f5\`；两者相同 |
| PR #6 CI | Draft；verify SUCCESS；2026-10-16 07:37:02 +08:00 完成 |
| 线上冒烟 | \`npm run preview:smoke\` exit 0；10 项通过 |
| 真实运行计数 | 仍为 1 / 7；接续本记录，无新增运行 |

[CI 实测证据](https://github.com/luckygood/DiseasePulse/actions/runs/38824448772/job/116728490084)。
首页、Horizon、稳定 Event / Asset / Disease / Search / About 深链均为 HTTP 200 且
\`rendered=true\`；未知路径 HTTP 404；\`noindex, nofollow\` 保留；\`preview-source.json\`
HTTP 200 且 \`integrationSha\` 与上述 PR HEAD 相同。此 SHA 是当时的实测提交，
后续网页更新的部署以届时 PR HEAD 和线上 \`preview-source.json\` 为准。

该次复核未重复执行 13 项门禁、未修改产品或数据、未提交或部署；原始失败和修复记录如上保留。
`,c={pass:`通过`,pass_after_remediation:`修复后通过`,failed:`失败`,missed:`遗漏（不计入真实运行）`};function l(e,...t){for(let n of t){let t=e.split(`
`).map(e=>e.split(`|`).map(e=>e.trim())).reverse().find(e=>e[1]===n);if(t?.[2])return t[2].replace(/[`*]/g,``)}return null}function u(e,t=``){let n=Object.entries(e).flatMap(([e,t])=>{let n=e.match(/\/(\d{4}-\d{2}-\d{2})\.md$/)?.[1],r=l(t,`结论`);if(!n||!r||!Object.prototype.hasOwnProperty.call(c,r))return[];let i=t.split(`
`).filter(e=>/^\|\s*\d+\s*\|/.test(e));return[{date:n,outcome:r,markdown:t,passedGates:i.filter(e=>{let t=e.split(`|`).map(e=>e.trim().replace(/`/g,``));return t[4]===`pass`||t[3]===`pass`&&[`—`,``,`pass`].includes(t[4])}).length,totalGates:i.length}]}).sort((e,t)=>e.date.localeCompare(t.date)),r=n.filter(e=>e.outcome!==`missed`),i=n[n.length-1]??null,a=r.length>=7&&i!==null&&[`pass`,`pass_after_remediation`].includes(i.outcome)&&i.totalGates===13&&i.passedGates===13&&l(t,`Beta Ready`)===`Yes`;return{runs:n,realRunCount:r.length,latest:i,betaReady:a}}var d=t(),f=u(Object.assign({"/docs/beta-trial/runs/2026-10-16.md":s}),Object.values(Object.assign({}))[0]);function p(){let e=f.latest;if(!e)return null;let t=[[`最近同日复核`,l(e.markdown,`最近同日复核（Asia/Shanghai）`)],[`来源检查`,l(e.markdown,`Source dry-run 最终计数`,`Source 状态计数`)],[`候选审核`,l(e.markdown,`Candidate 状态计数`)],[`事件 / 来源 / 里程碑 / 项目`,l(e.markdown,`Event / Source / Milestone / Asset`)],[`新增快照`,l(e.markdown,`本轮新增 snapshot`)]].filter(e=>e[1]!==null);return(0,d.jsx)(`div`,{id:`beta-trial`,children:(0,d.jsxs)(r,{title:`Beta 试运行记录`,description:`按真实执行计数；同日复核不重复计数，调度遗漏不计入七次。`,children:[(0,d.jsxs)(`p`,{className:`text-label font-semibold text-text-primary`,children:[`累计 `,f.realRunCount,` / 7 次真实运行`]}),(0,d.jsxs)(`p`,{className:`mt-md text-label-sm text-text-primary`,children:[`最新记录 `,e.date,` · `,c[e.outcome],e.totalGates>0?` · 本轮门禁 ${e.passedGates} / ${e.totalGates} 通过`:``]}),(0,d.jsx)(`dl`,{className:`mt-lg flex flex-col gap-md text-label-sm`,children:t.map(([e,t])=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`dt`,{className:`font-semibold text-text-primary`,children:e}),(0,d.jsx)(`dd`,{className:`mt-xs break-words text-text-secondary`,children:t})]},e))}),(0,d.jsxs)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:[`Beta Ready：`,f.betaReady?`Yes`:`No`,`；Production Released：No。 七次真实运行完成后，依据最终报告判断 Beta 是否就绪。`]}),(0,d.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`以上为最近审计记录的结果；候选待审核、没有新快照或新增里程碑本身不构成失败。`}),(0,d.jsx)(`a`,{className:`bubo-news-textlink mt-lg inline-block`,href:`https://github.com/luckygood/DiseasePulse/blob/codex/bubopin-news-v1-integration/docs/beta-trial/runs/${e.date}.md`,target:`_blank`,rel:`noreferrer`,children:`查看完整审计记录（GitHub） ↗`})]})})}var m={"verified-no-new":`已核验 · 覆盖窗口内无新增事件`,"pending-verification":`已接入 · 增量待核验`,"unknown-coverage":`覆盖未知 · 未接入 Tracker 核验`,"not-covered":`未覆盖`};function h(){return(0,d.jsxs)(`div`,{className:`mx-auto max-w-reading`,children:[(0,d.jsx)(n,{title:`关于 BuboPin News`,description:`面向公众、无需注册的极简信息流、研发日历与项目时间轴。`}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-xl`,children:[(0,d.jsx)(i,{}),(0,d.jsx)(p,{}),(0,d.jsxs)(r,{title:`产品定位`,children:[(0,d.jsx)(`p`,{className:`text-label text-text-primary`,children:`BuboPin News 将分散的企业公告、临床试验、监管与学术增量整理为可按疾病浏览、可回溯来源的极简信息流。`}),(0,d.jsx)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:`原型优先验证“快速发现 → 理解变化 → 核对证据”，不提供临床决策、投资建议或 AI 问答。`})]}),(0,d.jsxs)(r,{title:`当前覆盖`,children:[(0,d.jsx)(`div`,{className:`flex flex-wrap gap-md`,children:o.map(t=>(0,d.jsx)(e,{label:t.nameZh,variant:`secondary`},t.id))}),(0,d.jsx)(`p`,{className:`mt-lg text-label-sm text-text-secondary`,children:`当前 MVP 覆盖 2026 年 CKD、IgA 肾病、肥胖与交叉心血管风险事件。未收录不等于没有研发活动。`})]}),(0,d.jsx)(r,{title:`数据时效`,children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-lg text-label-sm text-text-primary`,children:[(0,d.jsxs)(`p`,{children:[`最近事件披露 `,a.latestEventDate??`—`,` · 最近事实核验 `,a.latestVerifiedAt??`—`,` · 最近来源巡检 `,a.latestSourceCheckedAt??`—`,` · 发布截止 `,a.asOf]}),(0,d.jsx)(`ul`,{className:`flex list-disc flex-col gap-sm pl-xl text-label-sm text-text-secondary`,children:a.diseases.map(e=>(0,d.jsxs)(`li`,{children:[e.nameZh,`：`,m[e.state],`（`,e.eventCount,` 条，最新披露 `,e.latestEventDate??`—`,`，Tracker 核验至 `,e.trackerCoverageThrough??`—`,`）`,e.pendingWindow?`；待核验窗口 ${e.pendingWindow.from??`覆盖起点未知`} → ${e.pendingWindow.to}`:``]},e.id))}),(0,d.jsx)(`p`,{className:`text-label-sm text-text-secondary`,children:a.pendingVerificationWindow?`${a.pendingVerificationWindow.from??`未知起始日期`} 至 ${a.pendingVerificationWindow.to} 之间的新增披露处于待核验窗口；未通过独立核验前不会发布。`:`最新已发布事件已达到数据截止日，当前没有顶层待核验间隙。`})]})}),(0,d.jsx)(r,{title:`收录方法`,children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-lg text-label-sm text-text-primary`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{className:`font-semibold`,children:`事件优先：`}),`同一临床事实可对应多篇来源，但保留一个主事件并连接后续更新。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{className:`font-semibold`,children:`事实与解读分离：`}),`“发生了什么”只写来源支持的事实，“为什么重要”明确标注为研究解读。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{className:`font-semibold`,children:`负面事件同等可见：`}),`失败、暂停、安全观察和拒批不会因结果不积极而被隐藏。`]}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{className:`font-semibold`,children:`Fail Closed：`}),`关键字段冲突、数字无法定位或来源失效时，不自动生成新的医学结论。`]})]})}),(0,d.jsx)(r,{title:`重要度与证据等级`,children:(0,d.jsxs)(`div`,{className:`grid gap-xl sm:grid-cols-2`,children:[(0,d.jsxs)(`div`,{className:`rounded-corner-md bg-bg-faint p-lg`,children:[(0,d.jsx)(`p`,{className:`text-label font-semibold text-text-primary`,children:`重要度`}),(0,d.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`A：关键后期结果、重大监管、安全或交易事件。B：有实质增量的中期数据、状态变化与早期人体信号。`})]}),(0,d.jsxs)(`div`,{className:`rounded-corner-md bg-bg-faint p-lg`,children:[(0,d.jsx)(`p`,{className:`text-label font-semibold text-text-primary`,children:`证据等级`}),(0,d.jsx)(`p`,{className:`mt-md text-label-sm text-text-secondary`,children:`E1：正式原始记录；E2：企业公告或会议披露；E3：可信二级来源。等级不等同于事件重要度。`})]})]})}),(0,d.jsx)(r,{title:`纠错原则`,children:(0,d.jsx)(`p`,{className:`text-label-sm text-text-primary`,children:`修订不会伪装成新事件。日期、关系或事实发生重大修改时，详情页保留“修改了什么、为什么修改”的可见记录；来源失效时继续展示最后一次已核验版本并标明状态。`})}),(0,d.jsx)(r,{title:`使用声明`,children:(0,d.jsxs)(`div`,{className:`flex flex-col gap-md text-label-sm text-text-secondary`,children:[(0,d.jsx)(`p`,{children:`免费阅读，无广告、无付费墙，不强迫注册。`}),(0,d.jsx)(`p`,{children:`不收集用户健康信息，不提供个体医疗建议。`}),(0,d.jsx)(`p`,{children:`当前页面为 noindex 预览，使用独立核验的真实事件并连接公开原始来源。`}),(0,d.jsx)(`p`,{children:`事件在来源缺失、事实冲突或日期未来时会被发布门禁阻断。`})]})})]})]})}export{h as default};