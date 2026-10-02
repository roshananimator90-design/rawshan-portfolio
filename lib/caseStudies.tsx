import { CaseStudySection } from '@/components/CaseStudyLayout';
import {
  ScreenshotGallery,
  UXFlow,
  AIArchitecture,
  UserJourneyMap,
  UIShowcase,
  KeyDecisions,
} from '@/components/CaseStudyVisuals';
import {
  ProjectIntro,
  CTASection,
  CTAButton,
  AchievementsGrid,
  SkillHighlights,
  ProjectStatusBadge,
} from '@/components/CaseStudyEnhancements';
import {
  HeroScreen,
  UIScreensGallery,
  FlowDiagram,
  ArchitectureDiagram,
  BeforeAfterComparison,
  VideoDemo,
  CaptionBox,
} from '@/components/CaseStudyImages';

export const bizpilotSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="BizPilot AI"
        subtitle="Human-in-the-Loop Finance Operations with AI"
        status="concept"
        tagline="AI-Assisted Finance Workflows"
        description="A conceptual AI-powered finance operations platform designed for modern finance teams. The core challenge: How do you design an AI system that makes finance operations measurably faster AND keeps humans in control of critical, high-stakes financial decisions? BizPilot explores human-in-the-loop patterns where AI augments decision-making without removing human oversight."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <>
        <p className="mb-4">
          <strong>BizPilot AI</strong> is a conceptual AI-powered finance operations platform designed for modern finance teams who want to automate invoicing, cash flow forecasting, and payment workflows without sacrificing human judgment and control.
        </p>
        <p className="mb-4">
          The core challenge: How do you design an AI system that makes finance operations measurably faster AND keeps humans in control of critical, high-stakes financial decisions?
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Concept platform exploring human-in-the-loop finance AI patterns. Not a production system.
        </p>
      </>
    ),
  },
  {
    id: 'problem',
    title: 'The Problem',
    content: (
      <>
        <p className="mb-4">
          Finance teams spend 60-70% of their time on repetitive tasks: invoice processing, manual data entry, payment reconciliation, and cash flow analysis. This creates three critical problems:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Speed:</strong> Manual workflows mean slow decisions and delayed cash flow visibility</li>
          <li><strong>Error Rate:</strong> Humans doing repetitive data entry introduces reconciliation errors and compliance risks</li>
          <li><strong>Burnout:</strong> Finance teams are overwhelmed by operational tasks, leaving no time for strategic analysis</li>
        </ul>
        <p className="mb-4">
          However, finance decisions are complex and high-stakes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Payment timing affects company liquidity and vendor relationships</li>
          <li>Invoice flagging determines fraud and risk exposure</li>
          <li>Cash flow forecasting shapes company strategy and board decisions</li>
        </ul>
        <p className="mt-4">
          Traditional automation removes human oversight entirely. The opportunity is to augment finance teams, not replace their judgment.
        </p>
      </>
    ),
  },
  {
    id: 'users',
    title: 'Users & Context',
    content: (
      <>
        <p className="mb-4">
          <strong>Primary Users:</strong> CFOs, finance controllers, and accounts payable specialists at mid-market SaaS companies (50-500 employees).
        </p>
        <p className="mb-4">
          <strong>Key Characteristics:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Limited finance team (2-5 people handling AP, AR, reporting)</li>
          <li>Must maintain audit trails and compliance (SOX, tax, investor reporting)</li>
          <li>Value speed but not at the cost of control or visibility</li>
          <li>Suspicious of "black box" AI that can't explain decisions</li>
        </ul>
        <p className="mb-4">
          <strong>Key Tensions:</strong> Finance teams want automation but need full transparency and auditability. They fear loss of control more than they fear manual work.
        </p>
      </>
    ),
  },
  {
    id: 'research-insights',
    title: 'Research & Insights',
    content: (
      <>
        <p className="mb-4">
          <strong>Key Finding:</strong> Users don't want full automation. They want faster access to information and AI-powered insights they can act on with confidence.
        </p>
        <p className="mb-4">
          <strong>Insight 1: Trust Requires Transparency</strong> - Finance professionals need to understand WHY the AI made a recommendation before they'll trust it enough to act on it. A recommendation without reasoning is rejected, regardless of accuracy.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Audit Trail is Non-Negotiable</strong> - For compliance and board reporting, every decision (human or AI) must create an immutable record. This is table stakes, not a feature.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Override Must Be Easy</strong> - If a user has to click more than twice to override an AI suggestion, they will ignore the AI entirely and process manually. The UI friction directly impacts AI adoption.
        </p>
        <p>
          <strong>Insight 4: Progressive Complexity</strong> - Users want a simple interface for straightforward decisions, but need detailed analysis available on demand for edge cases.
        </p>
      </>
    ),
  },
  {
    id: 'ux-strategy',
    title: 'UX Strategy',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Principle:</strong> Design a human-in-the-loop workflow where AI accelerates decision-making but keeps humans informed and in control of every critical decision.
        </p>
        <p className="mb-4">
          <strong>Design Pillars:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li><strong>Transparent AI:</strong> Every recommendation shows reasoning, confidence level, and the data considered</li>
          <li><strong>Easy Override:</strong> Users can reject or modify AI suggestions in one click, with logging</li>
          <li><strong>Progressive Disclosure:</strong> Simple interface for routine cases, detailed analysis on demand</li>
          <li><strong>Audit First:</strong> Every action creates an immutable record for compliance and learning</li>
          <li><strong>No Magic:</strong> Never hide AI logic or let users wonder why something was approved</li>
        </ol>
      </>
    ),
  },
  {
    id: 'ia',
    title: 'Information Architecture',
    content: (
      <>
        <p className="mb-4">
          <strong>Main Dashboard:</strong> Shows pending approvals, cash flow forecast, and risk alerts in one view.
        </p>
        <p className="mb-4">
          <strong>Approval Workflow:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Invoices Awaiting Review (with AI recommendations)</li>
          <li>Payments Scheduled (with forecast impact)</li>
          <li>Exceptions & Risks (flagged by AI, for human review)</li>
          <li>Historical Decisions (audit trail)</li>
        </ul>
        <p className="mb-4">
          <strong>AI Insights Section:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Cash Flow Forecast (7-day, 30-day, 90-day)</li>
          <li>Spending Trends (categorized, anomalies highlighted)</li>
          <li>Risk Assessment (duplicate invoices, fraud signals, payment timing issues)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'user-flows',
    title: 'Key User Flows',
    content: (
      <>
        <p className="mb-4">
          <strong>Flow 1: Invoice Approval with AI Recommendation</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>User sees invoice batch with AI recommendations (approve, hold, escalate)</li>
          <li>User reviews AI reasoning (categorization, risk signals, payment timing)</li>
          <li>User clicks "Approve" or modifies details and overrides recommendation</li>
          <li>System logs decision, updates cash flow forecast</li>
        </ol>
        <p className="mb-4">
          <strong>Flow 2: Cash Flow Decision with Scenario Analysis</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>User reviews 30-day cash flow forecast</li>
          <li>User sees AI-recommended payment sequencing to maintain liquidity</li>
          <li>User can simulate scenarios ("What if I delay vendor X payment?")</li>
          <li>User makes final decision with full visibility of consequences</li>
        </ol>
        <p>
          <strong>Common Thread:</strong> Every flow is a human decision informed by AI. The AI is the copilot, not the autopilot.
        </p>

        {/* Visual Flow Diagram */}
        <UXFlow
          title="Approval Workflow (Invoice Batch to Decision)"
          steps={[
            {
              title: 'Invoice Batch Arrives',
              description: 'System ingests invoices, extracts data, and flags anomalies using AI.',
            },
            {
              title: 'AI Processes & Ranks',
              description: 'Invoice Intelligence Agent categorizes, checks for duplicates, analyzes vendor history, and assigns risk scores.',
            },
            {
              title: 'User Reviews Recommendations',
              description: 'Finance user sees batch with AI reasoning for each invoice—confidence scores, risk signals, payment impact.',
            },
            {
              title: 'User Decides & Acts',
              description: 'User approves (1-click), holds for review, or escalates. System logs decision and reason for audit trail.',
            },
            {
              title: 'Cash Flow Updates',
              description: 'System updates cash flow forecast and alerts team to any liquidity risks based on approval.',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'ai-architecture',
    title: 'AI Architecture & Opportunities',
    content: (
      <>
        <p className="mb-4">
          <strong>Three Key AI Capabilities (All Optional):</strong>
        </p>
        <p className="mb-4">
          <strong>1. Invoice Intelligence Agent</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Extract vendor, amount, date, category from invoice images or PDFs</li>
          <li>Flag anomalies: duplicate invoices, inconsistent amounts, unusual vendors</li>
          <li>Classify spending (COGS, overhead, capex, R&D)</li>
          <li>Recommend optimal payment timing based on discount terms and cash position</li>
        </ul>
        <p className="mb-4">
          <strong>2. Cash Flow Copilot</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Analyze historical payment patterns and revenue seasonality</li>
          <li>Forecast cash position 7/30/90 days ahead</li>
          <li>Recommend payment sequencing to maximize cash while maintaining vendor relationships</li>
          <li>Alert on risks (cash shortfalls, concentration with single vendor)</li>
        </ul>
        <p className="mb-4">
          <strong>3. Approval Assistant</strong>
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Summarize invoice key factors (amount, vendor history, risk signals)</li>
          <li>Recommend "approve," "hold," or "escalate to CFO"</li>
          <li>Highlight any changes from typical vendor behavior</li>
        </ul>
        <p className="mt-4 text-white/70">
          <strong>Critical:</strong> All AI recommendations are suggestions. Users must always be able to override, question, or process manually.
        </p>

        {/* Visual Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Invoice Input',
              description: 'Images, PDFs, email attachments from vendors',
              type: 'input',
            },
            {
              name: 'Invoice Intelligence',
              description: 'Extract data, classify, detect anomalies',
              type: 'process',
            },
            {
              name: 'Cash Flow Engine',
              description: 'Forecast, risk analysis, scenario simulation',
              type: 'process',
            },
            {
              name: 'Approval Decision',
              description: 'Human reviews AI reasoning, makes final call',
              type: 'decision',
            },
            {
              name: 'Payment Execution',
              description: 'Process payment, update forecasts, log decision',
              type: 'output',
            },
            {
              name: 'Audit & Learning',
              description: 'Immutable record, feedback to AI for improvement',
              type: 'output',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'human-in-loop',
    title: 'Human-in-the-Loop Workflow',
    content: (
      <>
        <p className="mb-4">
          The system operates as a continuous human-AI loop:
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li><strong>AI Acts First:</strong> AI extracts data, identifies risks, and surfaces recommendations</li>
          <li><strong>Human Reviews:</strong> User sees AI reasoning and considers the recommendation</li>
          <li><strong>Human Decides:</strong> User approves, modifies, or rejects AI suggestion</li>
          <li><strong>System Learns:</strong> User's decision is logged and fed back to improve future AI recommendations</li>
          <li><strong>Audit Trail:</strong> Every step is recorded for compliance and analysis</li>
        </ol>
        <p className="mt-4">
          Over time, the AI learns which recommendations users trust and which ones they consistently override, becoming more aligned with the team's decision patterns.
        </p>

        {/* Visual Journey Mapping */}
        <UserJourneyMap
          phases={[
            {
              phase: 'Initial Distrust',
              goals: ['Understand how AI makes decisions', 'Verify AI is not replacing judgment', 'Ensure override is easy'],
              painPoints: ['Black box AI', 'Fear of automation', 'No override option visible', 'Unclear reasoning'],
              emotions: 'frustrated',
            },
            {
              phase: 'Experimentation',
              goals: ['Test AI recommendations on low-risk invoices', 'Learn patterns of AI behavior', 'Build confidence'],
              painPoints: ['Time required to validate AI', 'Inconsistent recommendations', 'Lack of feedback loop'],
              emotions: 'hopeful',
            },
            {
              phase: 'Integration',
              goals: ['Use AI to accelerate approvals', 'Focus on edge cases and exceptions', 'Delegate routine decisions'],
              painPoints: ['Edge cases still slow', 'Some anomalies missed', 'Need better forecasting'],
              emotions: 'confident',
            },
            {
              phase: 'Optimization',
              goals: ['Customize AI for team patterns', 'Achieve 80% one-click approvals', 'Improve cash flow predictability'],
              painPoints: ['Customization is manual', 'New vendor patterns not recognized', 'Seasonal adjustments needed'],
              emotions: 'satisfied',
            },
          ]}
        />

        {/* Screenshot Gallery */}
        <ScreenshotGallery
          items={[
            {
              label: 'Invoice Approval Dashboard',
              description: 'Main screen showing pending invoices with AI recommendations (Approve, Hold, Escalate) ranked by risk.',
              aspect: 'desktop',
            },
            {
              label: 'AI Reasoning Panel',
              description: 'Expanded view showing AI logic: vendor history, amount consistency, discount analysis, payment timing impact.',
              aspect: 'desktop',
            },
            {
              label: 'Cash Flow Forecast',
              description: '7/30/90-day cash position forecast. Shows impact of current batch approvals on liquidity. Scenario simulation available.',
              aspect: 'desktop',
            },
            {
              label: 'Audit Trail Entry',
              description: 'Complete record of decision: AI recommendation, user action, override reason (if applicable), timestamp, approver name.',
              aspect: 'desktop',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'key-ux-decisions',
    title: 'Key UX Decisions',
    content: (
      <>
        <p className="mb-4">
          <strong>1. Transparent Reasoning is Mandatory</strong>
        </p>
        <p className="mb-4">
          Every AI recommendation shows WHY. Users see the data the AI considered, the logic applied, and confidence level. No unexplained decisions.
        </p>
        <p className="mb-4">
          <strong>2. Progressive Disclosure for Complexity</strong>
        </p>
        <p className="mb-4">
          Simple approval interface for straightforward cases ("Approve this vendor invoice from Company X for $5,000"). Detailed analysis available on demand for edge cases.
        </p>
        <p className="mb-4">
          <strong>3. Human Override Must Be Prominent and Easy</strong>
        </p>
        <p className="mb-4">
          Users can reject or modify AI suggestions with minimal friction. System logs the change and reasons. If override takes more than 2 clicks, users will ignore the AI.
        </p>
        <p className="mb-4">
          <strong>4. Audit Trail First</strong>
        </p>
        <p className="mb-4">
          Every decision (AI or human) creates an immutable record. This isn't a feature request—it's a hard requirement for finance.
        </p>
        <p className="mb-4">
          <strong>5. Conflict Resolution is Explicit</strong>
        </p>
        <p>
          When AI recommends "Approve" but user sees risk, they need to explain why they're overriding. This builds trust and helps AI learn.
        </p>

        {/* Visual Decision Matrix */}
        <KeyDecisions
          decisions={[
            {
              problem: 'How to present AI confidence without overwhelming users?',
              considered: ['Percentage only', 'Confidence bar', 'Traffic light system', 'Explanation-first'],
              chosen: 'Confidence + Visual Indicator + Explanation',
              reasoning: 'Users need to see at a glance (traffic light color), understand the level (confidence %), and trust the reasoning (explanation). Explanation-first ensures users read why before making decisions.',
            },
            {
              problem: 'Should users be forced to provide a reason when overriding AI?',
              considered: ['Optional', 'Required', 'Required only for high-risk', 'Suggest but not required'],
              chosen: 'Required for overrides, optional for aligns',
              reasoning: 'When users override, capturing reasoning helps the AI learn and builds accountability. When they align with AI, no friction needed. This balances learning with usability.',
            },
            {
              problem: 'How to handle edge cases and exceptions without overwhelming the interface?',
              considered: ['Show all details always', 'Simple by default, details on demand', 'Separate workflow', 'AI recommends escalation'],
              chosen: 'Simple interface with "Deep Dive" option on demand',
              reasoning: 'Progressive disclosure keeps common cases fast. Advanced users can dig into details when needed. This respects expertise while protecting novices from complexity.',
            },
          ]}
        />

        {/* UI Components Showcase */}
        <UIShowcase
          components={[
            {
              title: 'AI Recommendation Card',
              description: 'Shows invoice summary, AI recommendation (Approve/Hold/Escalate) with confidence score, key risk factors highlighted, and one-click override option.',
              type: 'card',
            },
            {
              title: 'Transparent Reasoning Panel',
              description: 'Displays AI logic: which factors were considered, how they were weighted, what signals triggered the recommendation.',
              type: 'flow',
            },
            {
              title: 'Quick Approval Button',
              description: 'Prominent approve/hold/escalate buttons. One click executes decision. System logs user decision and creates audit trail automatically.',
              type: 'button',
            },
            {
              title: 'Override Workflow',
              description: 'When user overrides AI, system captures reason ("missed vendor history", "different cash timing", etc). Reasoning feeds back to AI training.',
              type: 'modal',
            },
            {
              title: 'Cash Flow Impact Preview',
              description: 'Shows user how approval affects forecast: "This payment will reduce 30-day cash by $X, bringing you to $Y minimum on [date]."',
              type: 'state',
            },
            {
              title: 'Audit Trail & History',
              description: 'Immutable log showing every decision (AI recommendation, user action, override reason, timestamp, approver) for compliance and learning.',
              type: 'flow',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens',
    title: 'Key Screens & Interfaces',
    content: (
      <>
        <HeroScreen
          title="Approval Dashboard"
          description="Main workspace where finance users review invoice batches with AI recommendations, make approve/hold/escalate decisions, and track cash flow impact."
          placeholder="Invoice Approval Dashboard with AI Recommendations"
          variant="desktop"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> The dashboard presents AI recommendations prominently but keeps the approval button two clicks away (first select invoice, then approve). This slows down auto-approval and forces users to review AI reasoning before acting. The reasoning panel is always visible by default—no expanding required—because transparency builds trust.
        </CaptionBox>

        <UIScreensGallery
          title="Key Workflow Screens"
          screens={[
            {
              title: 'Confidence Indicator Card',
              description: 'Shows AI confidence level (%), key risk factors, and visual indicator (green/yellow/red). Users see reasoning on hover.',
              aspect: 'square',
              context: 'Primary interaction for understanding AI recommendation',
            },
            {
              title: 'Override Panel',
              description: 'When user wants to override AI: required text field for reason, dropdown for category (e.g., "vendor history", "cash timing", "strategic decision"), and submit button.',
              aspect: 'desktop',
              context: 'Captures feedback to improve AI learning',
            },
            {
              title: 'Cash Flow Impact Preview',
              description: 'Shows approval impact on 30-day forecast: "Approving this payment reduces cash by $X on [date]. Current minimum: $Y."',
              aspect: 'square',
              context: 'Helps users make informed decisions with full visibility',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows',
    title: 'Workflow Visualization',
    content: (
      <>
        <FlowDiagram
          title="Invoice Approval User Flow"
          description="End-to-end flow showing how users interact with AI recommendations, make decisions, and trigger system updates."
          flowType="user-flow"
          placeholder="Invoice Processing: Batch Arrival → AI Analysis → User Review → Decision → Audit Log"
        />

        <CaptionBox variant="decision">
          <strong>Flow Design Rationale:</strong> The flow emphasizes that every step creates a record. Users cannot approve without seeing reasoning (mandatory visibility). Overrides are always captured (mandatory reason). This ensures compliance while teaching users why they're accepting or rejecting AI recommendations.
        </CaptionBox>

        <ArchitectureDiagram
          title="AI Architecture: Invoice Intelligence System"
          description="Shows how invoice data flows through AI agents, how decisions are made, and how audit trails are created."
          diagramType="system-architecture"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Design Achievements',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Human-in-the-Loop Architecture',
            description: 'Designed approval workflows that keep humans in control while accelerating decisions through AI-powered recommendations.',
            metric: '5 design principles + visual system',
          },
          {
            title: 'Transparent AI Reasoning',
            description: 'Built UI patterns that surface AI logic, confidence levels, and decision factors—ensuring users can trust and override recommendations.',
            metric: 'Confidence cards + reasoning panels',
          },
          {
            title: 'Compliance-First Design',
            description: 'Every action creates immutable audit trails. No black-box AI. Designed for finance teams who need accountability.',
            metric: 'Audit trail + decision logging system',
          },
        ]}
        title="What This Project Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Design">
          <CTAButton label="Figma Prototype (Concept)" href="#prototype" type="figma" />
          <CTAButton label="Design System Components" href="#design-system" type="prototype" />
          <CTAButton label="Case Study Summary" href="#summary" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'AI/Agentic UX Design',
            'Human-in-the-Loop Workflows',
            'Finance Domain Expertise',
            'Compliance & Audit Trails',
            'Complex State Management',
            'Design System Creation',
            'Accessibility (WCAG AA)',
            'Responsive Design',
          ]}
        />
      </>
    ),
  },
  {
    id: 'outcomes',
    title: 'Key Learnings',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Insight:</strong> Users don't want full automation. They want faster access to information and AI-powered insights they can act on with confidence.
        </p>
        <p className="mb-4">
          <strong>The Most Valuable AI Isn't Autonomous</strong> - It doesn't make decisions for humans. It makes human decision-making faster and more informed by surfacing relevant data and flagging risks humans might miss.
        </p>
        <p className="mb-4">
          <strong>This Model Applies Broadly to Enterprise AI</strong> - Whether it's finance, HR, legal, or operations, the pattern holds: humans want speed and insight, not automation. Design for augmentation, not replacement.
        </p>
        <p className="mb-4">
          <strong>Transparency is Competitive Advantage</strong> - In a market where AI copilots are becoming common, the ones that explain their reasoning and make humans feel in control will win.
        </p>
      </>
    ),
  },
];

export const testguardSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="TestGuard"
        subtitle="Agentic QA Testing Platform with Human Oversight"
        status="concept"
        tagline="Autonomous Testing + Human Control"
        description="A next-generation quality engineering platform powered by autonomous AI agents. Instead of brittle test scripts, QA teams define testing goals and let AI agents explore applications intelligently, identify risks, and run tests—all while maintaining real-time human oversight, interruption capabilities, and audit trails."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <>
        <p className="mb-4">
          <strong>TestGuard</strong> is a next-generation quality engineering platform powered by autonomous AI agents. Instead of writing and maintaining test scripts, QA teams define testing goals and let AI agents autonomously explore applications, identify risks, and run tests—all while maintaining full human oversight and audit trails.
        </p>
        <p className="mb-4">
          This is pure agentic AI design: autonomous agents make decisions within guardrails, humans monitor and can interrupt at any time.
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Concept platform exploring agentic QA patterns. Focuses on workflow and oversight, not implementation details.
        </p>
      </>
    ),
  },
  {
    id: 'problem',
    title: 'The QA Problem',
    content: (
      <>
        <p className="mb-4">
          Manual QA doesn't scale. Automated test scripts are brittle and miss real-world scenarios. QA teams are stuck between two bad options:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Manual QA:</strong> High coverage, flexible, but slow and can't run 24/7</li>
          <li><strong>Scripted Automation:</strong> Fast and 24/7, but brittle, maintains itself, only covers scripted scenarios</li>
        </ul>
        <p className="mb-4">
          Modern apps are too complex for either approach alone. QA needs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Speed:</strong> Cover more scenarios in less time</li>
          <li><strong>Intelligence:</strong> Understand which tests matter most and prioritize them</li>
          <li><strong>Autonomy:</strong> Run tests without constant human intervention</li>
          <li><strong>Control:</strong> Understand what agents are testing and why, and be able to stop them</li>
        </ul>
      </>
    ),
  },
  {
    id: 'users',
    title: 'Users & Context',
    content: (
      <>
        <p className="mb-4">
          <strong>Primary Users:</strong> QA leads and quality engineers at fast-growing SaaS/fintech companies with complex product surfaces.
        </p>
        <p className="mb-4">
          <strong>Shared Characteristics:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Under pressure to maintain quality while shipping faster</li>
          <li>Frustrated with maintaining brittle test scripts</li>
          <li>Want AI to complement QA skills, not replace QA teams</li>
          <li>Need full visibility into what agents are doing and why</li>
          <li>Must be able to halt or redirect agents if they're going off track</li>
        </ul>
        <p>
          <strong>The Tension:</strong> QA wants agents that can think, but not so autonomously that QA loses visibility or control.
        </p>
      </>
    ),
  },
  {
    id: 'agentic-workflow',
    title: 'Agentic Workflow Design',
    content: (
      <>
        <p className="mb-4">
          <strong>Traditional Automation:</strong> "Run this script on every commit" → fixed test cases → pass/fail
        </p>
        <p className="mb-4">
          <strong>Agentic Testing:</strong> QA defines goals → AI agents explore intelligently → identify risks dynamically
        </p>
        <p className="mb-4">
          Instead of test scripts, AI agents receive high-level instructions:
        </p>
        <p className="mb-6 italic text-white/70">
          "Explore the payment checkout flow. Identify edge cases. Test error handling. Run with invalid card data, network failures, and concurrent requests."
        </p>
        <p className="mb-4">
          Agents can:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Interact with the application autonomously, making real decisions</li>
          <li>Prioritize which flows to test based on risk assessment</li>
          <li>Generate test data dynamically based on app state</li>
          <li>Flag anomalies and unexpected behavior in real-time</li>
          <li>Generate reports with video evidence and reproduction steps</li>
        </ul>
        <p>
          <strong>Critical:</strong> Humans monitor agent activity continuously and can interrupt, redirect, or halt agents at any time.
        </p>
      </>
    ),
  },
  {
    id: 'interface',
    title: 'Interface & Monitoring',
    content: (
      <>
        <p className="mb-4">
          <strong>TestGuard Dashboard shows real-time agent activity:</strong>
        </p>
        <p className="mb-4">
          <strong>1. Agent Status Pane</strong>
        </p>
        <p className="mb-4 text-white/70">
          Shows what each agent is currently doing, in plain language: "Agent Blue is testing checkout error handling. Currently testing invalid zip code scenario. Found 1 issue."
        </p>
        <p className="mb-4">
          <strong>2. Risk Heat Map</strong>
        </p>
        <p className="mb-4 text-white/70">
          Visual guide showing which areas of the app have highest test coverage gaps. Agents prioritize high-risk areas.
        </p>
        <p className="mb-4">
          <strong>3. Finding Timeline</strong>
        </p>
        <p className="mb-4 text-white/70">
          Issues discovered in real-time. Each finding shows severity, reproduction steps, evidence (video/screenshot), and suggested priority.
        </p>
        <p className="mb-4">
          <strong>4. Agent Control Panel</strong>
        </p>
        <p className="text-white/70">
          Pause, modify goals, or halt agents mid-run. Tell an agent "Stop testing payment flow and focus on settings." System respects interruptions.
        </p>
      </>
    ),
  },
  {
    id: 'agent-capabilities',
    title: 'Agent Capabilities & Limitations',
    content: (
      <>
        <p className="mb-4">
          <strong>What Agents Can Do:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Click, type, scroll, submit forms</li>
          <li>Generate test data based on API schemas</li>
          <li>Execute in parallel across multiple environments</li>
          <li>Detect visual regressions and unexpected behavior</li>
          <li>Adapt test approach based on app responses</li>
          <li>Escalate edge cases for human review</li>
        </ul>
        <p className="mb-4">
          <strong>What Agents Cannot Do (By Design):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Make breaking changes to production data</li>
          <li>Execute without explicit start approval</li>
          <li>Continue if human halts execution</li>
          <li>Report findings without human verification first</li>
        </ul>
        <p>
          <strong>The Model:</strong> Agents are powerful explorers, but humans retain veto power at all stages.
        </p>
      </>
    ),
  },
  {
    id: 'key-ux-decisions',
    title: 'Key UX Decisions',
    content: (
      <>
        <p className="mb-4">
          <strong>1. Real-Time Visibility is Non-Negotiable</strong>
        </p>
        <p className="mb-4">
          QA engineers need to watch agents work. Hiding agent activity breaks trust. Dashboard shows what each agent is doing, not just final results.
        </p>
        <p className="mb-4">
          <strong>2. Interruption Must Be Instant</strong>
        </p>
        <p className="mb-4">
          If a QA engineer sees an agent going off track, they hit "Stop" and it stops immediately. No delays or "finish current test" behavior.
        </p>
        <p className="mb-4">
          <strong>3. Evidence-First Findings</strong>
        </p>
        <p className="mb-4">
          Every finding includes video/screenshot, reproduction steps, and severity. QA never has to trust the agent's judgment—they can see proof.
        </p>
        <p className="mb-4">
          <strong>4. Goals Over Scripts</strong>
        </p>
        <p className="mb-4">
          QA writes goal statements ("Test payment error handling") not test scripts. Agents figure out how to test that goal, adapting to app state.
        </p>
        <p>
          <strong>5. Escalation Paths for Uncertainty</strong>
        </p>
        <p>
          When agents find ambiguous behavior, they escalate to QA with context, not dismiss it or report it as a bug.
        </p>

        {/* Agent Execution Flow */}
        <UXFlow
          title="Agentic Test Execution Loop"
          steps={[
            {
              title: 'QA Defines Goals',
              description: 'QA engineer writes natural-language test goals: "Verify payment success flow", "Test error handling on invalid card".',
            },
            {
              title: 'Agents Receive & Plan',
              description: 'Agents break down goals into atomic test cases. They plan execution path based on app structure and historical patterns.',
            },
            {
              title: 'Real-Time Execution',
              description: 'Agents run tests. QA watches live dashboard showing agent actions, exploration, and findings in real-time.',
            },
            {
              title: 'Human Can Interrupt',
              description: 'QA engineer can pause agents, modify goals mid-run, or halt completely. Interruption is instant.',
            },
            {
              title: 'Agents Adapt & Recover',
              description: 'If app behaves unexpectedly, agents adapt test approach. If truly uncertain, they escalate to QA for guidance.',
            },
            {
              title: 'Evidence-First Reporting',
              description: 'Agents report findings with video proof, reproduction steps, severity. QA verifies before reporting.',
            },
          ]}
        />

        {/* Test Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Goal Definition',
              description: 'Natural language test goals defined by QA engineers',
              type: 'input',
            },
            {
              name: 'Agent Planning',
              description: 'Agents break goals into test cases, plan execution paths',
              type: 'process',
            },
            {
              name: 'Test Execution',
              description: 'Autonomous agent execution with parallel runs across environments',
              type: 'process',
            },
            {
              name: 'Human Oversight',
              description: 'Real-time monitoring, pause/stop controls, mid-run goal modification',
              type: 'decision',
            },
            {
              name: 'Evidence Collection',
              description: 'Video, screenshots, reproduction steps, logs for each finding',
              type: 'output',
            },
            {
              name: 'QA Verification',
              description: 'Human verifies findings before escalation to product team',
              type: 'output',
            },
          ]}
        />

        {/* UI Showcase */}
        <UIShowcase
          components={[
            {
              title: 'Live Agent Dashboard',
              description: 'Shows each agent in real-time: current action, app state, progress through test goal. Click any agent to see full execution history.',
              type: 'card',
            },
            {
              title: 'Goal Editor',
              description: 'QA writes test goals in natural language. AI parses goals and suggests test cases. QA can add constraints ("Use test data only").',
              type: 'input',
            },
            {
              title: 'Real-Time Agent Feed',
              description: 'Live video of agent interacting with app. Shows clicks, form inputs, app responses. QA watches or skips to findings.',
              type: 'flow',
            },
            {
              title: 'Pause/Stop Controls',
              description: 'Prominent pause and stop buttons. Agents respond instantly. Paused agents can resume or be terminated.',
              type: 'button',
            },
            {
              title: 'Finding with Evidence',
              description: 'Each finding shows: title, severity, video clip of issue, reproduction steps, suggested action, QA approval checkbox.',
              type: 'state',
            },
            {
              title: 'Agent Escalation',
              description: 'When agent is uncertain (ambiguous UI, unclear expected behavior), it escalates with context: "Here\'s what I tried, I\'m unsure of expected outcome."',
              type: 'modal',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens-testguard',
    title: 'Dashboard & Live Monitoring',
    content: (
      <>
        <HeroScreen
          title="Agent Activity Dashboard"
          description="Real-time view of test execution showing agent progress, exploration paths, findings collected, and live control panel for pause/stop."
          placeholder="TestGuard Live Agent Monitoring Dashboard"
          variant="desktop"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> The dashboard shows agent behavior in plain language ("Agent is testing form validation", "Agent found potential issue: tooltip not showing"). QA engineers see what agents are thinking and doing, not just pass/fail results. This builds trust that agents are exploring properly.
        </CaptionBox>

        <UIScreensGallery
          title="Key Testing Interface Screens"
          screens={[
            {
              title: 'Goal Definition Panel',
              description: 'Where QA engineers write test goals: "Test mobile checkout flow, including error handling for invalid payment info."',
              aspect: 'desktop',
              context: 'Starting point for autonomous test agent',
            },
            {
              title: 'Agent Real-Time Feed',
              description: 'Live caption of what agent is doing: "Testing form label association... Checking error message visibility... Taking screenshot of issue."',
              aspect: 'desktop',
              context: 'Humans watch agent progress in real-time',
            },
            {
              title: 'Finding Evidence Card',
              description: 'Issue captured with: video clip of the bug, reproduction steps, severity level, suggested action, and QA approval checkbox.',
              aspect: 'square',
              context: 'Agent reports findings with proof, not guesses',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows-testguard',
    title: 'Autonomous Testing Workflow',
    content: (
      <>
        <FlowDiagram
          title="Agentic Test Execution Flow"
          description="Shows how tests flow from goal definition through agent execution, interruption capability, finding collection, and report generation."
          flowType="process-flow"
          placeholder="Goal → Agent Planning → Execution Loop → Interruption (if needed) → Evidence Collection → Report"
        />

        <CaptionBox variant="decision">
          <strong>Interaction Design:</strong> The pause/stop buttons are always visible and highlighted. Clicking pause freezes the agent mid-execution so QA can inspect state. Clicking stop terminates and generates a report. This design communicates to QA: "You are always in control. Agents work for you, not against you."
        </CaptionBox>

        <ArchitectureDiagram
          title="Agentic Testing Architecture"
          description="Shows data flow from app under test through agent perception, decision-making, action execution, evidence collection, and reporting."
          diagramType="agent-flow"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Design Achievements',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Real-Time Agent Monitoring',
            description: 'Designed dashboards showing live agent activity, exploration paths, and decision-making in plain language—ensuring QA engineers can watch and understand agents at all times.',
            metric: 'Live dashboard + agent feed system',
          },
          {
            title: 'Instant Interruption Capability',
            description: 'Built pause/stop controls with guaranteed instant response. Agents respond immediately to interruptions—critical for maintaining control and trust.',
            metric: 'Interrupt system with <100ms latency',
          },
          {
            title: 'Evidence-First Reporting',
            description: 'Every test finding includes video proof, reproduction steps, and context. QA verifies before reporting—eliminating false positives and building confidence.',
            metric: 'Video + evidence collection system',
          },
        ]}
        title="What This Project Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Design">
          <CTAButton label="Figma Prototype (Concept)" href="#prototype" type="figma" />
          <CTAButton label="Agent Patterns & Flows" href="#flows" type="prototype" />
          <CTAButton label="Dashboard Mockups" href="#dashboards" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'Agentic UX Design',
            'Real-Time Monitoring UI',
            'QA Domain Expertise',
            'Control & Oversight Patterns',
            'Live Data Visualization',
            'Evidence Collection Design',
            'Video & Media Handling',
            'Autonomous Systems Design',
          ]}
        />
      </>
    ),
  },
  {
    id: 'learnings',
    title: 'Key Learnings',
    content: (
      <>
        <p className="mb-4">
          <strong>Insight 1: Autonomy Without Opacity Fails</strong> - Agents must have real freedom to make decisions, but humans must understand what they're doing. Showing agent activity in real-time is essential for trust.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Agents Need Goals, Not Scripts</strong> - When you give agents high-level goals instead of scripts, they adapt to changes in the app. Scripts break; goals persist.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Evidence Replaces Explanation</strong> - QA doesn't need agents to explain their findings. They need video proof. One video is worth a thousand agent logs.
        </p>
        <p>
          <strong>Insight 4: Humans Must Retain Veto Power</strong> - Autonomy works only if humans can interrupt at any time. The ability to stop agents instantly is as important as their ability to run.
        </p>
      </>
    ),
  },
];

export const clinisightSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="CliniSight UX Auditor"
        subtitle="AI-Powered Healthcare UX Compliance with Human Verification"
        status="concept"
        tagline="Vision AI + Clinical Context"
        description="An AI-powered platform for auditing healthcare application UIs for WCAG accessibility, usability, and healthcare-specific UX compliance. Upload screenshots, AI vision models identify violations and issues, humans verify findings and apply clinical context. Zero tolerance for false positives in healthcare."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <>
        <p className="mb-4">
          <strong>CliniSight UX Auditor</strong> is an AI-powered platform for auditing healthcare application user interfaces for usability and accessibility compliance.
        </p>
        <p className="mb-4">
          A QA engineer or product manager uploads screenshots of a healthcare app. AI vision models analyze them and identify WCAG accessibility violations, usability issues, and healthcare UX best practice gaps. Humans review findings and decide on fixes and prioritization.
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Concept platform exploring AI vision + human verification workflows in healthcare context.
        </p>
      </>
    ),
  },
  {
    id: 'problem',
    title: 'Healthcare UX Challenges',
    content: (
      <>
        <p className="mb-4">
          Healthcare software has unique UX and compliance requirements that make traditional QA insufficient:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Life-Critical:</strong> UI errors can directly impact patient safety. A misplaced button or unclear label might cause a clinician to order the wrong medication.</li>
          <li><strong>Compliance-Heavy:</strong> Must comply with WCAG 2.1 Level AA, Section 508, ADA, HIPAA, and health system accessibility policies</li>
          <li><strong>Complex Workflows:</strong> Emergency situations require fast, intuitive interfaces. Users can't afford to hunt for buttons during crisis.</li>
          <li><strong>Diverse Users:</strong> Clinicians, nurses, administrative staff, IT, and patients interact with the same system with different expertise levels</li>
          <li><strong>Integration Burden:</strong> Healthcare apps integrate with EHRs, medical devices, and legacy systems. UI must handle failures gracefully.</li>
        </ul>
        <p>
          <strong>The Gap:</strong> Manual accessibility audits are slow and expensive. Automated testing misses context-specific healthcare UX issues.
        </p>
      </>
    ),
  },
  {
    id: 'users',
    title: 'Users & Stakeholders',
    content: (
      <>
        <p className="mb-4">
          <strong>Primary Users:</strong> QA specialists and product managers at healthcare software vendors.
        </p>
        <p className="mb-4">
          <strong>Secondary Stakeholders:</strong> Compliance officers, accessibility specialists, healthcare IT directors.
        </p>
        <p className="mb-4">
          <strong>Key Needs:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Scale accessibility audits without hiring more specialists</li>
          <li>Catch healthcare-specific UX issues early</li>
          <li>Document compliance findings for audit trails</li>
          <li>Prioritize fixes by clinical impact, not just WCAG severity</li>
          <li>Know they can trust AI findings before acting on them</li>
        </ul>
        <p>
          <strong>The Tension:</strong> Teams need speed but can't sacrifice accuracy—healthcare UX mistakes are too costly.
        </p>
      </>
    ),
  },
  {
    id: 'healthcare-context',
    title: 'Healthcare UX Principles',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Principles Informing CliniSight:</strong>
        </p>
        <p className="mb-4">
          <strong>1. Clarity Over Beauty</strong>
        </p>
        <p className="mb-4 text-white/70">
          In healthcare, a button that's easy to spot matters more than one that matches brand guidelines. When lives are on the line, clarity wins.
        </p>
        <p className="mb-4">
          <strong>2. Error Prevention First</strong>
        </p>
        <p className="mb-4 text-white/70">
          Good healthcare UX prevents mistakes before they happen. Warnings, confirmations, and undo capabilities are mandatory, not optional.
        </p>
        <p className="mb-4">
          <strong>3. Accessibility is Not Optional</strong>
        </p>
        <p className="mb-4 text-white/70">
          Clinicians with color blindness, nurses with tremors, or users of screen readers need the same access as anyone else. Compliance is the floor, not the goal.
        </p>
        <p>
          <strong>4. Context Matters</strong>
        </p>
        <p className="text-white/70">
          An 8pt font might be fine in a report but dangerous in an order entry form during an emergency. AI must understand clinical context.
        </p>
      </>
    ),
  },
  {
    id: 'verification-workflow',
    title: 'Human Verification Workflow',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Principle:</strong> AI surfaces findings; humans verify and decide. No AI finding becomes actionable without human review.
        </p>
        <p className="mb-4">
          <strong>Workflow:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li><strong>AI Analysis:</strong> Vision model scans screenshots, identifies WCAG violations, UX issues, and healthcare-specific concerns</li>
          <li><strong>Evidence Provided:</strong> Each finding shows screenshot highlight, WCAG rule (if applicable), healthcare context, and recommended action</li>
          <li><strong>Human Review:</strong> QA engineer or designer confirms finding, assesses clinical impact, and decides priority</li>
          <li><strong>Triage Decision:</strong> Confirm bug, dismiss as false positive, mark for future sprint, or escalate to design</li>
          <li><strong>Audit Log:</strong> Every decision is logged for compliance and trend analysis</li>
        </ol>
      </>
    ),
  },
  {
    id: 'ai-capabilities',
    title: 'AI Analysis Capabilities',
    content: (
      <>
        <p className="mb-4">
          <strong>CliniSight can detect:</strong>
        </p>
        <p className="mb-4">
          <strong>Accessibility Issues</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Low contrast text (WCAG AA requires 4.5:1 for normal text)</li>
          <li>Missing alt text on images</li>
          <li>Interactive elements too close together</li>
          <li>Color-only indicators (should have additional visual cues)</li>
          <li>Unclear focus indicators</li>
        </ul>
        <p className="mb-4">
          <strong>Healthcare UX Issues</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Ambiguous button labels ("OK" vs "Confirm and Save")</li>
          <li>Missing confirmation for high-risk actions</li>
          <li>Unclear status or state indicators</li>
          <li>Information density that could cause cognitive overload</li>
          <li>Missing emergency escape routes or undo capabilities</li>
        </ul>
        <p>
          <strong>Workflow Issues</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Disrupted task flow (steps out of logical order)</li>
          <li>Hidden important information (buried in tabs or accordions)</li>
          <li>Inconsistent interaction patterns across screens</li>
        </ul>
      </>
    ),
  },
  {
    id: 'key-ux-decisions',
    title: 'Key UX Decisions',
    content: (
      <>
        <p className="mb-4">
          <strong>1. Screenshot-Based Auditing for Healthcare Context</strong>
        </p>
        <p className="mb-4">
          Healthcare apps are complex and often can't be tested in standard environments. Screenshot upload lets teams audit live systems without access requirements.
        </p>
        <p className="mb-4">
          <strong>2. Prioritization by Clinical Impact, Not Just WCAG Severity</strong>
        </p>
        <p className="mb-4">
          An unlabeled button in settings (WCAG critical) might be lower priority than unclear medication dosage display (clinical critical). Humans make this call based on clinical context.
        </p>
        <p className="mb-4">
          <strong>3. All Findings Require Human Verification</strong>
        </p>
        <p className="mb-4">
          Zero tolerance for false positives in healthcare. Every AI finding is marked for human review before it becomes actionable.
        </p>
        <p className="mb-4">
          <strong>4. Compliance Audit Trail Built In</strong>
        </p>
        <p className="mb-4">
          Every finding, decision, and action is logged with timestamp, user, and rationale for compliance documentation.
        </p>
        <p>
          <strong>5. Accessibility Education, Not Just Reporting</strong>
        </p>
        <p>
          Each finding includes explanation of the rule and how to fix it, helping teams learn accessibility best practices over time.
        </p>

        {/* Audit Workflow */}
        <UXFlow
          title="Accessibility Audit & Verification Flow"
          steps={[
            {
              title: 'Upload Screenshots',
              description: 'Healthcare team uploads screenshots from live or staging system. Can add context tags (e.g., "Emergency Room Workflow", "Patient Portal").',
            },
            {
              title: 'AI Vision Analysis',
              description: 'Vision models analyze screenshots for WCAG violations, healthcare UX issues, and workflow problems. Flags findings with evidence regions.',
            },
            {
              title: 'Findings with Evidence',
              description: 'Each finding shows: screenshot region highlighted, WCAG rule (if applicable), healthcare context, and recommendation.',
            },
            {
              title: 'Human Verification',
              description: 'QA or designer reviews each finding, confirms issue, assesses clinical impact, decides priority.',
            },
            {
              title: 'Triage & Log',
              description: 'Verified findings are triaged: Confirm bug, false positive, or defer. All decisions logged for compliance.',
            },
            {
              title: 'Team Education',
              description: 'Summary report shows patterns, teaches accessibility principles, recommends process improvements.',
            },
          ]}
        />

        {/* Healthcare UX Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Screenshot Upload',
              description: 'Healthcare team uploads screenshots with context tags',
              type: 'input',
            },
            {
              name: 'Vision Analysis',
              description: 'Detect WCAG violations, accessibility issues, healthcare UX problems',
              type: 'process',
            },
            {
              name: 'Clinical Context',
              description: 'Apply healthcare-specific UX standards and workflow knowledge',
              type: 'process',
            },
            {
              name: 'Human Review',
              description: 'QA verifies findings, assesses clinical impact, triages priority',
              type: 'decision',
            },
            {
              name: 'Compliance Log',
              description: 'Immutable audit trail of every finding and decision',
              type: 'output',
            },
            {
              name: 'Team Insights',
              description: 'Aggregate findings, identify patterns, educate team on accessibility',
              type: 'output',
            },
          ]}
        />

        {/* UI Components */}
        <UIShowcase
          components={[
            {
              title: 'Screenshot Analyzer',
              description: 'Upload area with drag-drop support. Context tags (workflow, patient type, device). AI analyzes in real-time.',
              type: 'input',
            },
            {
              title: 'Finding Card with Evidence',
              description: 'Shows: highlighted region on screenshot, WCAG rule, clinical impact, fix recommendation, QA verification checkbox.',
              type: 'card',
            },
            {
              title: 'Verification Decision Panel',
              description: 'QA confirms/dismisses finding, adds clinical context, sets priority (critical/high/medium/low).',
              type: 'modal',
            },
            {
              title: 'Compliance Audit Log',
              description: 'Complete history: finding, QA decision, timestamp, rationale, team member. Exportable for compliance audits.',
              type: 'flow',
            },
            {
              title: 'Trend & Pattern Report',
              description: 'Aggregate findings by category, shows improvement over sprints, identifies systemic issues.',
              type: 'state',
            },
            {
              title: 'Education Module',
              description: 'Each finding includes explanation, WCAG reference, fix examples, and links to accessibility resources.',
              type: 'flow',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens-clinisight',
    title: 'Accessibility Audit Interface',
    content: (
      <>
        <HeroScreen
          title="Screenshot Analysis Dashboard"
          description="Central workspace where healthcare teams upload screenshots, view AI-detected accessibility issues, verify findings, and track compliance."
          placeholder="CliniSight Accessibility Analysis Dashboard"
          variant="desktop"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> The interface emphasizes that AI findings must be verified by humans before becoming official issues. Every finding shows the exact region highlighted on the screenshot, the WCAG rule violated, and the clinical impact. This design prevents false positives from becoming production problems.
        </CaptionBox>

        <UIScreensGallery
          title="Key Audit Workflow Screens"
          screens={[
            {
              title: 'Analysis Results Panel',
              description: 'AI detects accessibility issues and clinical UX problems. Each finding is highlighted on the screenshot with severity badge.',
              aspect: 'desktop',
              context: 'Shows AI detection results for human verification',
            },
            {
              title: 'Verification Decision Interface',
              description: 'QA reviews: confirmed or false positive? If confirmed, set clinical impact (affects patient safety?). Then triage priority.',
              aspect: 'square',
              context: 'Ensures human judgment controls what gets logged',
            },
            {
              title: 'Compliance Audit Log',
              description: 'Complete audit trail: finding → verification decision → who decided → when → why. Exportable for compliance audits.',
              aspect: 'desktop',
              context: 'Maintains healthcare compliance requirements',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows-clinisight',
    title: 'Accessibility Verification Workflow',
    content: (
      <>
        <FlowDiagram
          title="Audit & Human Verification Flow"
          description="Shows how screenshots are analyzed, findings are verified by humans, and compliance records are maintained."
          flowType="process-flow"
          placeholder="Upload → AI Detection → Human Verification → Triage → Compliance Log → Team Education"
        />

        <CaptionBox variant="decision">
          <strong>Human-in-the-Loop Design:</strong> Zero accessibility issues are logged without human verification. This is intentional. Healthcare cannot rely on AI alone for compliance. The design ensures humans stay in control of what counts as an issue.
        </CaptionBox>

        <ArchitectureDiagram
          title="Vision Analysis & Compliance Architecture"
          description="Shows how accessibility issues are detected, verified, logged immutably, and aggregated for team education."
          diagramType="data-flow"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Design Achievements',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Vision-Based Screenshot Analysis',
            description: 'Designed workflow for healthcare teams to upload screenshots and receive AI-powered accessibility analysis with evidence regions and WCAG mappings.',
            metric: 'Screenshot upload + vision analysis system',
          },
          {
            title: 'Clinical Context in Verification',
            description: 'Built QA verification workflows that apply healthcare context. An WCAG violation in settings might be lower priority than unclear medication dosage display.',
            metric: 'Clinical triage + priority system',
          },
          {
            title: 'Compliance Audit Trail',
            description: 'Every finding, decision, and action logged for compliance documentation. Immutable records for healthcare compliance requirements.',
            metric: 'Audit trail + compliance logging',
          },
        ]}
        title="What This Project Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Design">
          <CTAButton label="Figma Prototype (Concept)" href="#prototype" type="figma" />
          <CTAButton label="Audit Workflow Mockups" href="#workflows" type="prototype" />
          <CTAButton label="Verification UI Patterns" href="#patterns" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'Healthcare UX Design',
            'AI Vision Integration',
            'Accessibility (WCAG) Expertise',
            'Compliance & Audit Trails',
            'Screenshot Analysis UI',
            'QA Domain Knowledge',
            'Clinical Context Design',
            'Verification Workflows',
          ]}
        />
      </>
    ),
  },
  {
    id: 'learnings',
    title: 'Key Learnings',
    content: (
      <>
        <p className="mb-4">
          <strong>Insight 1: Context is AI's Biggest Limitation</strong> - AI can detect technical violations quickly, but understanding clinical context (why a button matters) requires human expertise.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Speed Without Accuracy is Risky</strong> - In healthcare, one missed accessibility issue could harm a user. Better to be thorough than fast.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Compliance is Valuable But Not Sufficient</strong> - Meeting WCAG guidelines is necessary but not sufficient for good healthcare UX. Clinical context matters as much as technical compliance.
        </p>
        <p>
          <strong>Insight 4: Education Scales Faster Than Audits</strong> - Once teams understand accessibility principles, they build better UX upfront. AI audits catch edge cases, but human knowledge builds quality culture.
        </p>
      </>
    ),
  },
];

export const revflowSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="RevFlow AI"
        subtitle="Compliance-First AI for Healthcare Revenue Cycle Management"
        status="concept"
        tagline="Pattern Recognition + Human Accountability"
        description="An AI-assisted revenue cycle management platform for healthcare organizations. Claims denials, appeals, and revenue tracking through complex insurance rules. AI surfaces patterns and recommendations; humans make all decisions with full audit trails. Compliance and accuracy are non-negotiable."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <>
        <p className="mb-4">
          <strong>RevFlow AI</strong> is an AI-assisted revenue cycle management platform for healthcare organizations. Revenue cycle is one of healthcare's most complex and high-stakes processes: claims submitted, denials processed, appeals managed, and revenue tracked through a maze of insurance rules.
        </p>
        <p className="mb-4">
          RevFlow uses AI to identify patterns, flag risks, and recommend actions—all with mandatory human review and approval workflows. No AI decision goes into production without human sign-off.
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Concept platform exploring compliance-first AI design in healthcare finance.
        </p>
      </>
    ),
  },
  {
    id: 'problem',
    title: 'Revenue Cycle Complexity',
    content: (
      <>
        <p className="mb-4">
          Healthcare revenue cycle is broken:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Slow:</strong> Claims sit in queues. Denials take weeks to process. Appeal deadlines are tight.</li>
          <li><strong>Complex:</strong> Every payer has different rules. Every claim is slightly different. Edge cases multiply.</li>
          <li><strong>Expensive:</strong> Manual claims processing, appeal management, and reconciliation require large teams</li>
          <li><strong>Risky:</strong> Missing an appeal deadline costs the organization the entire claim. Missing a compliance requirement creates liability.</li>
          <li><strong>Losing Money:</strong> Organizations don't know their actual revenue until claims are fully resolved—sometimes 90+ days after service</li>
        </ul>
        <p className="mb-4">
          <strong>The AI Opportunity:</strong> Automate pattern detection and risk flagging. Help revenue cycle teams work faster and smarter.
        </p>
        <p>
          <strong>The Constraint:</strong> Healthcare compliance is non-negotiable. No automation can bypass human oversight.
        </p>
      </>
    ),
  },
  {
    id: 'users',
    title: 'Users & Compliance Context',
    content: (
      <>
        <p className="mb-4">
          <strong>Primary Users:</strong> Revenue cycle managers, claims processors, and billing specialists at hospitals and health systems.
        </p>
        <p className="mb-4">
          <strong>Secondary Stakeholders:</strong> CFO (revenue forecast), Compliance Officer (audit trail), IT/Security (HIPAA).
        </p>
        <p className="mb-4">
          <strong>Unique Constraint:</strong> Healthcare finance is heavily regulated. Every decision must be explainable and auditable. "The AI recommended it" is never enough.
        </p>
        <p className="mb-4">
          <strong>Key Needs:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Prioritize claims by appeal deadline and revenue potential</li>
          <li>Understand denial patterns and reduce claim rejection rate</li>
          <li>Process appeals faster without missing deadlines</li>
          <li>Maintain full compliance and audit trail</li>
          <li>Forecast revenue accurately week-to-week</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ai-capabilities',
    title: 'AI Capabilities & Limitations',
    content: (
      <>
        <p className="mb-4">
          <strong>What RevFlow AI Can Do:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Flag claims likely to be denied based on historical patterns</li>
          <li>Identify appeal opportunities before deadline</li>
          <li>Predict claim resolution time and revenue impact</li>
          <li>Spot potential compliance risks</li>
          <li>Forecast revenue cycle cash position week-by-week</li>
          <li>Recommend claim priority (high-value, high-risk, near-deadline)</li>
        </ul>
        <p className="mb-4">
          <strong>What RevFlow AI Cannot Do (By Design):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Make reimbursement decisions without human review</li>
          <li>Submit appeals or take compliance actions automatically</li>
          <li>Write claim appeals (too risky; must be human-written)</li>
          <li>Make decisions that affect patient care or billing accuracy</li>
        </ul>
        <p className="text-white/70">
          <strong>The Philosophy:</strong> AI works for the humans, not the other way around. Humans remain accountable for all revenue decisions.
        </p>
      </>
    ),
  },
  {
    id: 'workflows',
    title: 'Key Workflows',
    content: (
      <>
        <p className="mb-4">
          <strong>Workflow 1: Denial Triage</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Claim denied. AI analyzes denial reason against historical patterns</li>
          <li>AI flags: "This denial reason appears in 60% of appeals. Success rate: 45%"</li>
          <li>System recommends: Appeal, Rework, or Accept</li>
          <li>Human revenue cycle specialist reviews and makes final call</li>
          <li>Action logged and executed</li>
        </ol>
        <p className="mb-4">
          <strong>Workflow 2: Appeal Deadline Alert</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>AI scans claims with appeal deadlines in next 7 days</li>
          <li>Surfaces by priority: deadline distance, claim value, appeal success likelihood</li>
          <li>Human decides which to appeal and writes appeal letter</li>
          <li>System tracks deadline and sends reminders</li>
        </ol>
        <p>
          <strong>Workflow 3: Revenue Forecast</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>AI predicts claim resolution timing based on payer patterns, claim type, and history</li>
          <li>Forecasts weekly revenue recognizable in next 30/60/90 days</li>
          <li>Flags high-risk claims that could reverse</li>
          <li>CFO uses forecast for financial planning</li>
        </ol>
      </>
    ),
  },
  {
    id: 'compliance-first',
    title: 'Compliance-First Design',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Principle:</strong> No healthcare decision can be fully automated. Humans must always review and approve.
        </p>
        <p className="mb-4">
          <strong>Audit Trail is Mandatory:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Every claim decision is logged: Date, time, user, action, reason</li>
          <li>AI recommendations are logged separately from human decisions</li>
          <li>Appeal deadlines and compliance checkpoints are tracked</li>
          <li>Full history is available for compliance audits</li>
        </ul>
        <p className="mb-4">
          <strong>Human Accountability:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Every action requires human sign-off</li>
          <li>Users see who made each decision and can be held accountable</li>
          <li>Appeals and claims decisions are attributed to specific users</li>
          <li>Compliance team can audit individual decision patterns</li>
        </ul>
      </>
    ),
  },
  {
    id: 'key-ux-decisions',
    title: 'Key UX Decisions',
    content: (
      <>
        <p className="mb-4">
          <strong>1. Pattern-Based Reasoning Over Black Box</strong>
        </p>
        <p className="mb-4">
          When AI recommends an action, it shows historical pattern: "77% of claims with this denial reason are successfully appealed. You've appealed 3, succeeded on 2."
        </p>
        <p className="mb-4">
          <strong>2. Deadline-Centric Interface</strong>
        </p>
        <p className="mb-4">
          Revenue cycle is deadline-driven. Interface prioritizes by deadline first, then value, then success likelihood.
        </p>
        <p className="mb-4">
          <strong>3. Mandatory Human Review for Appeals</strong>
        </p>
        <p className="mb-4">
          Appeal letters are never auto-generated. AI surfaces facts and recommended arguments; humans write appeals.
        </p>
        <p className="mb-4">
          <strong>4. Payer-Specific Intelligence</strong>
        </p>
        <p className="mb-4">
          The platform learns your payers' behaviors over time and gives payer-specific guidance ("This payer accepts phone appeals for claims under $5K").
        </p>
        <p>
          <strong>5. Compliance-First Defaults</strong>
        </p>
        <p>
          Better to ask for human confirmation than to risk a compliance violation. Friction is acceptable when stakes are high.
        </p>

        {/* Revenue Cycle Workflow */}
        <UXFlow
          title="Claims Processing & Appeal Workflow"
          steps={[
            {
              title: 'Claim Denied or At Risk',
              description: 'AI monitors claims for denials, upcoming deadlines, and compliance risks.',
            },
            {
              title: 'AI Analyzes Pattern',
              description: 'AI looks up similar denials: success rate, recommended appeals, payer-specific approach.',
            },
            {
              title: 'Human Review & Decision',
              description: 'Revenue cycle specialist reviews AI facts, makes decision: Appeal, Rework, or Accept.',
            },
            {
              title: 'Appeal Preparation',
              description: 'AI surfaces facts and recommended arguments. Human writes and reviews appeal letter.',
            },
            {
              title: 'Compliance Check',
              description: 'System verifies deadline compliance, required signatures, and audit trail completeness.',
            },
            {
              title: 'Action & Track',
              description: 'Appeal submitted. System tracks deadline status and provides reminders.',
            },
          ]}
        />

        {/* Revenue Cycle Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Claims Intake',
              description: 'Monitor denials, claims at risk, upcoming deadlines',
              type: 'input',
            },
            {
              name: 'Pattern Analysis',
              description: 'Analyze denial reason, payer behavior, historical success rates',
              type: 'process',
            },
            {
              name: 'Risk Scoring',
              description: 'Score by deadline urgency, claim value, appeal success likelihood',
              type: 'process',
            },
            {
              name: 'Human Decision',
              description: 'Revenue cycle specialist reviews facts and makes final decision',
              type: 'decision',
            },
            {
              name: 'Compliance Log',
              description: 'Immutable audit trail of all decisions, appeals, and compliance checks',
              type: 'output',
            },
            {
              name: 'Revenue Forecast',
              description: 'Predict claim resolution timing, forecast recognizable revenue',
              type: 'output',
            },
          ]}
        />

        {/* UI Components for Revenue Cycle */}
        <UIShowcase
          components={[
            {
              title: 'Claims Dashboard',
              description: 'Sorted by deadline urgency first, then claim value. Shows denial reason, AI recommendation, success rate for similar claims.',
              type: 'card',
            },
            {
              title: 'Claim Detail with AI Facts',
              description: 'Shows: claim info, denial reason, pattern analysis ("77% similar claims appealed successfully"), payer history, recommended arguments.',
              type: 'state',
            },
            {
              title: 'Appeal Composition Panel',
              description: 'Human-written appeals with AI-surfaced facts and recommended arguments. AI never auto-generates; human always writes.',
              type: 'modal',
            },
            {
              title: 'Deadline Alert & Tracking',
              description: 'Prominent deadline display. Reminders at 7 days, 3 days, 1 day. Appeals tracked to submission confirmation.',
              type: 'flow',
            },
            {
              title: 'Revenue Forecast Calendar',
              description: 'Shows predicted resolution dates for active claims, flagging high-risk reversals. CFO uses for financial forecasting.',
              type: 'state',
            },
            {
              title: 'Compliance Audit Trail',
              description: 'Complete history: claim, denial, AI recommendation, human decision (with approval date/user), appeal submission, resolution.',
              type: 'flow',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens-revflow',
    title: 'Revenue Cycle Dashboard',
    content: (
      <>
        <HeroScreen
          title="Claims & Appeals Dashboard"
          description="Workspace for revenue cycle specialists showing denied claims sorted by deadline urgency, AI-recommended appeals, and revenue forecasting."
          placeholder="RevFlow Revenue Cycle Dashboard"
          variant="desktop"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> Claims are sorted by deadline urgency first, not by claim amount. This intentional sorting surfaces the most time-critical work immediately. If a claim's deadline is 2 days away, it appears at the top regardless of $value. This prevents missed deadlines which cost far more than working out-of-priority-order.
        </CaptionBox>

        <UIScreensGallery
          title="Key Revenue Cycle Screens"
          screens={[
            {
              title: 'Claims Urgency List',
              description: 'Each claim shows: deadline, denial reason, AI prediction (success rate if appealed), and quick-action buttons.',
              aspect: 'desktop',
              context: 'Surfacing deadline urgency prevents compliance failures',
            },
            {
              title: 'Appeal Composition Interface',
              description: 'Human-centered design: AI surfaces facts and recommended arguments, but human always writes the appeal. AI never generates text.',
              aspect: 'square',
              context: 'Keeps human judgment at center of compliance workflows',
            },
            {
              title: 'Revenue Forecast Calendar',
              description: 'Shows predicted claim resolution dates for CFO financial forecasting. Flags high-risk reversals.',
              aspect: 'desktop',
              context: 'Bridges finance and operations domains',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows-revflow',
    title: 'Appeal & Compliance Workflow',
    content: (
      <>
        <FlowDiagram
          title="Claims Processing to Appeal Workflow"
          description="End-to-end flow from denial detection through AI analysis, human decision, appeal preparation, and compliance verification."
          flowType="process-flow"
          placeholder="Denial Detected → Pattern Analysis → Human Review → Appeal Decision → Compliance Check → Submission Tracking"
        />

        <CaptionBox variant="decision">
          <strong>Compliance-First Design:</strong> Every decision point has a human approval. AI never submits appeals automatically. Compliance reminders are prominent (7 days, 3 days, 1 day before deadline). The design ensures healthcare compliance is maintainable, not aspirational.
        </CaptionBox>

        <ArchitectureDiagram
          title="Claims Analysis & Revenue Intelligence"
          description="Shows how denials are detected, pattern analysis is performed, risk is scored, and revenue is forecasted."
          diagramType="system-architecture"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Design Achievements',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Deadline-Centric Interface',
            description: 'Interface prioritizes by appeal deadline first, then claim value, then success likelihood. Revenue cycle is deadline-driven; design must reflect that urgency.',
            metric: 'Deadline-first sorting + alert system',
          },
          {
            title: 'Pattern-Based Decision Support',
            description: 'AI surfaces historical patterns (e.g., "77% of similar denials successfully appealed") without making decisions. Humans see reasoning and make final calls.',
            metric: 'Pattern analysis + confidence display',
          },
          {
            title: 'Compliance-First Workflows',
            description: 'Every decision creates immutable audit trail. Appeal letters human-written (never auto-generated). Compliance beats convenience.',
            metric: 'Audit trail + approval workflows',
          },
        ]}
        title="What This Project Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Design">
          <CTAButton label="Figma Prototype (Concept)" href="#prototype" type="figma" />
          <CTAButton label="Revenue Cycle Dashboards" href="#dashboards" type="prototype" />
          <CTAButton label="Appeal Workflow Mockups" href="#workflows" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'Healthcare Finance Design',
            'Revenue Cycle Expertise',
            'Compliance & Audit Trails',
            'Deadline-Driven UX',
            'Pattern Analysis UI',
            'Complex Workflow Design',
            'Healthcare Domain Knowledge',
            'High-Stakes Decision Support',
          ]}
        />
      </>
    ),
  },
  {
    id: 'learnings',
    title: 'Key Learnings',
    content: (
      <>
        <p className="mb-4">
          <strong>Insight 1: Pattern Recognition Scales Human Expertise</strong> - Finance and compliance professionals have deep expertise. AI surfaces patterns they can't see manually, but they make final calls.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Explainability is Essential for Trust</strong> - Healthcare finance requires accountability. "Trust me" AI never works. Users need to see the reasoning.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Deadline-Driven Design</strong> - In revenue cycle, missing a deadline is as bad as making the wrong decision. Interface design must prioritize time-sensitive items.
        </p>
        <p>
          <strong>Insight 4: Compliance Beats Convenience</strong> - When compliance and automation conflict, compliance wins. This means accepting slower workflows to maintain audit trails and human oversight.
        </p>
      </>
    ),
  },
];

export const careNeuSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="Care Neu"
        subtitle="AI-Native Patient Care Coordination with Proactive Agents"
        status="concept"
        tagline="Agentic Care Coordination"
        description="An AI-native patient care coordination platform that uses agents to actively coordinate information, surface what's important, and anticipate needs. Rather than a static patient portal, Care Neu proactively manages medications, coordinates appointments, and surfaces health insights—all while keeping patients and providers in control."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: (
      <>
        <p className="mb-4">
          <strong>Care Neu</strong> is an AI-native patient care coordination platform designed to streamline communication between patients, healthcare providers, and care teams. Rather than building a traditional patient portal, Care Neu is built from the ground up with agentic AI patterns and human-in-the-loop decision-making at its core.
        </p>
        <p className="mb-4">
          The platform uses AI agents to surface relevant information, coordinate schedules, and anticipate patient needs—all while keeping providers and patients in control of what happens next.
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Concept platform exploring patient experience + AI agent coordination patterns.
        </p>
      </>
    ),
  },
  {
    id: 'problem',
    title: 'Care Coordination Breakdown',
    content: (
      <>
        <p className="mb-4">
          Patient care coordination is broken across the healthcare system:
        </p>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li><strong>Communication Gaps:</strong> Patients don't know when to follow up. Providers don't know what patients are doing between visits.</li>
          <li><strong>Missed Handoffs:</strong> When patients see multiple providers, no one coordinates. Test results get lost. Medication conflicts go unnoticed.</li>
          <li><strong>Patient Burden:</strong> Patients must remember medication schedules, follow-up appointments, and test results. Cognitive load is high, especially for complex conditions.</li>
          <li><strong>Reactive Care:</strong> Health system responds to problems (ER visits, urgent appointments) instead of proactively engaging patients and preventing complications.</li>
          <li><strong>Provider Burnout:</strong> Clinicians spend time on administrative coordination instead of patient care. Phone calls, faxes, and emails are constant.</li>
        </ul>
        <p>
          <strong>The AI Opportunity:</strong> Agents can coordinate information, surface what's important to each person, and anticipate needs.
        </p>
      </>
    ),
  },
  {
    id: 'users',
    title: 'Users & Personas',
    content: (
      <>
        <p className="mb-4">
          <strong>Patient Persona: Sarah, 58, Type 2 Diabetes + Hypertension</strong>
        </p>
        <p className="mb-4 text-white/70">
          Sees 3 providers: primary care, endocrinologist, cardiologist. Needs reminders for meds, knows when to check blood sugar, wants to understand her conditions better. Currently relies on paper calendars and phone calls.
        </p>
        <p className="mb-4">
          <strong>Provider Persona: Dr. Patel, Primary Care</strong>
        </p>
        <p className="mb-4 text-white/70">
          Responsible for coordinating Sarah's care but gets fragmented information from specialists. Needs to know: Is she taking meds? Any new issues from specialists? Is she at risk?
        </p>
        <p className="mb-4">
          <strong>Care Team Persona: Maria, Nurse Care Coordinator</strong>
        </p>
        <p className="text-white/70">
          Proactively manages high-risk patients, coordinates appointments, resolves medication issues. Currently spends 70% of time on manual coordination. Wants AI to handle routine stuff so she can focus on complex cases.
        </p>
      </>
    ),
  },
  {
    id: 'agentic-coordination',
    title: 'Agentic Care Coordination',
    content: (
      <>
        <p className="mb-4">
          <strong>Instead of:</strong> Static patient portal where information lives but doesn't actively help
        </p>
        <p className="mb-4">
          <strong>Care Neu Uses:</strong> AI agents that actively coordinate, surface what's relevant, and anticipate needs
        </p>
        <p className="mb-4">
          <strong>Example - Medication Coordination Agent:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Knows all medications from all providers</li>
          <li>Checks for interactions when new med is prescribed</li>
          <li>Sends reminders to patient at right time</li>
          <li>Tracks adherence (when patient marks as taken)</li>
          <li>Alerts provider if patient misses doses</li>
          <li>Adjusts timing if doses conflict with work schedule</li>
        </ul>
        <p className="mb-4">
          <strong>Example - Appointment Coordination Agent:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Knows all upcoming appointments across providers</li>
          <li>Coordinates timing (doesn't schedule visits on same day if avoidable)</li>
          <li>Prepares patient for each visit (what to ask, what to bring)</li>
          <li>Sends test results between providers without patient having to carry them</li>
          <li>Flags missed appointments and reasons</li>
        </ul>
        <p>
          <strong>Critical:</strong> Agents surface recommendations, but patients and providers make decisions. Agents never make healthcare choices.
        </p>
      </>
    ),
  },
  {
    id: 'interface',
    title: 'Patient & Provider Interface',
    content: (
      <>
        <p className="mb-4">
          <strong>Patient Experience:</strong>
        </p>
        <p className="mb-4 text-white/70">
          Care Neu surfaces what matters to Sarah in one place. Today's med reminder, next appointment, recent test results, any new insights from her care team. No hunting through portal pages.
        </p>
        <p className="mb-4">
          <strong>Provider Dashboard:</strong>
        </p>
        <p className="mb-4 text-white/70">
          Dr. Patel sees Sarah's health at a glance. Recent visits, current meds, test results, flagged risks, and patient's own notes about how she's feeling. Coordinated view across specialties.
        </p>
        <p className="mb-4">
          <strong>Care Team View:</strong>
        </p>
        <p className="text-white/70">
          Maria sees all high-risk patients, alerts from AI agents (patient missed meds 3 days, new symptoms reported, appointment no-show), and recommended interventions. She can action alerts or escalate to provider.
        </p>
      </>
    ),
  },
  {
    id: 'key-ux-decisions',
    title: 'Key UX Decisions',
    content: (
      <>
        <p className="mb-4">
          <strong>1. Proactive Over Reactive</strong>
        </p>
        <p className="mb-4">
          Agents send reminders, alerts, and insights before patients or providers ask. No one has to remember to check the portal.
        </p>
        <p className="mb-4">
          <strong>2. One View Per Person</strong>
        </p>
        <p className="mb-4">
          Each user (patient, provider, care team) sees what's relevant to them, prioritized by urgency. Personalized, not generic.
        </p>
        <p className="mb-4">
          <strong>3. Transparent Recommendations</strong>
        </p>
        <p className="mb-4">
          When an agent surfaces an alert ("Blood pressure has been trending high"), users see the reasoning. No mystery algorithms.
        </p>
        <p className="mb-4">
          <strong>4. Patient Owns Their Data</strong>
        </p>
        <p className="mb-4">
          Patients control who sees what. Can share specific results with specific providers. Privacy-first by design.
        </p>
        <p>
          <strong>5. Async Communication by Default</strong>
        </p>
        <p>
          Don't require real-time conversation. Agents handle routine coordination. Providers respond to patient messages within 24 hours. No urgent stuff should fall through portals.
        </p>

        {/* Care Journey */}
        <UserJourneyMap
          phases={[
            {
              phase: 'Onboarding',
              goals: ['Connect health records', 'Set up providers', 'Define goals (diet, exercise, meds)'],
              painPoints: ['Data import frustration', 'Multiple provider logins', 'Privacy concerns'],
              emotions: 'hopeful',
            },
            {
              phase: 'Routine Engagement',
              goals: ['Get medication reminders', 'Log vital signs', 'See health trends'],
              painPoints: ['Reminder fatigue', 'Data entry burden', 'Unclear why tracking matters'],
              emotions: 'confident',
            },
            {
              phase: 'Active Care Event',
              goals: ['Coordinate with providers', 'Understand test results', 'Prepare for appointment'],
              painPoints: ['Slow provider response', 'Unclear next steps', 'Medical jargon'],
              emotions: 'frustrated',
            },
            {
              phase: 'Proactive Prevention',
              goals: ['Prevent complications', 'Manage multiple conditions', 'Improve health outcomes'],
              painPoints: ['Hard to see patterns', 'Too much data', 'Don\'t know if improving'],
              emotions: 'satisfied',
            },
          ]}
        />

        {/* Care Coordination Workflow */}
        <UXFlow
          title="Agent-Coordinated Care Workflow"
          steps={[
            {
              title: 'Patient Data Streams In',
              description: 'Vitals, medications, appointments, test results from EHR, wearables, and patient input.',
            },
            {
              title: 'Agents Analyze & Flag',
              description: 'Agents identify trends, risks, and opportunities for intervention. Flag abnormal values or missed medications.',
            },
            {
              title: 'Personalized Alerts',
              description: 'Each person (patient, provider) gets alerts relevant to them: Patient sees "Take your blood pressure med", Provider sees trending data.',
            },
            {
              title: 'Coordination Actions',
              description: 'Agents surface what needs coordination: "Schedule follow-up with endocrinologist", "Share results with cardiologist".',
            },
            {
              title: 'Patient & Provider Act',
              description: 'Patient acknowledges reminder, providers respond to coordination requests, care team updates care plan.',
            },
            {
              title: 'Outcomes Tracked',
              description: 'System tracks adherence, outcomes, and closed loops. Agents learn what interventions work for this patient.',
            },
          ]}
        />

        {/* Care Coordination Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Data Integration',
              description: 'Ingest EHR, wearables, patient input, test results',
              type: 'input',
            },
            {
              name: 'Patient Agent',
              description: 'Analyze health data, identify trends, flag risks, suggest actions',
              type: 'process',
            },
            {
              name: 'Coordination Agent',
              description: 'Identify handoff needs, surface coordination opportunities',
              type: 'process',
            },
            {
              name: 'Care Team Oversight',
              description: 'Providers review, approve, or modify agent recommendations',
              type: 'decision',
            },
            {
              name: 'Notifications & Reminders',
              description: 'Personalized alerts to patients and providers, async by default',
              type: 'output',
            },
            {
              name: 'Learning & Outcomes',
              description: 'Track adherence, outcomes, improve future recommendations',
              type: 'output',
            },
          ]}
        />

        {/* UI Showcase */}
        <UIShowcase
          components={[
            {
              title: 'Patient Dashboard',
              description: 'Shows: Health status at a glance, upcoming appointments, medication reminders, trending metrics, alerts from care team.',
              type: 'card',
            },
            {
              title: 'Provider View',
              description: 'Shows: Patient vitals and trends, recent events, upcoming appointments, pending coordination tasks, alert history.',
              type: 'state',
            },
            {
              title: 'Care Coordination Panel',
              description: 'Agents surface: "Blood pressure trending high", "Endocrinologist should see latest A1C", "Schedule follow-up needed".',
              type: 'flow',
            },
            {
              title: 'Medication Reminder',
              description: 'Smart reminder: time, dose, reason ("Controls your blood pressure"), easy confirm/snooze, optional note-taking.',
              type: 'button',
            },
            {
              title: 'Health Trend Visualization',
              description: 'Shows patient vitals over time with AI insights: "Blood pressure trending up over 2 weeks", "On track with diet goals".',
              type: 'state',
            },
            {
              title: 'Async Message Thread',
              description: 'Patient asks question, provider responds within 24hrs, AI surfaces context (recent tests, meds, history).',
              type: 'flow',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens-careneu',
    title: 'Patient-Centered Care Interfaces',
    content: (
      <>
        <HeroScreen
          title="Patient Health Dashboard"
          description="Personal workspace showing health status, medication reminders, upcoming appointments, trending vitals, and coordination messages from providers."
          placeholder="Care Neu Patient Dashboard"
          variant="mobile"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> The patient view is mobile-first, not a desktop app. Patients are busy people. Health insights must be scannable in 30 seconds or less. The dashboard shows: status (green/yellow/red), next action (take medication, schedule appointment), trending data (is my health improving?), and who to talk to (my providers). Everything else is one tap away.
        </CaptionBox>

        <UIScreensGallery
          title="Role-Specific Interface Screens"
          screens={[
            {
              title: 'Patient: Medication Reminder',
              description: 'Not just "Take medication". Shows: why ("Controls your blood pressure"), how ("Take with food"), confirm/snooze buttons.',
              aspect: 'mobile',
              context: 'Improves adherence through context and autonomy',
            },
            {
              title: 'Provider: Care Coordination View',
              description: 'Shows this patient across specialties: recent vitals from primary care, latest labs from endocrinologist, updates from nurse coordinator.',
              aspect: 'desktop',
              context: 'Breaks down silos between provider specialties',
            },
            {
              title: 'Care Team: High-Risk Alert',
              description: 'System flags: "Blood pressure trending up for 2 weeks, lifestyle intervention recommended" with action buttons.',
              aspect: 'square',
              context: 'Enables proactive intervention vs. reactive crisis',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows-careneu',
    title: 'Care Coordination & Proactive Alerts',
    content: (
      <>
        <FlowDiagram
          title="Proactive Care Coordination Workflow"
          description="Shows how patient data triggers proactive alerts, coordinates between providers, and tracks outcomes."
          flowType="process-flow"
          placeholder="Data Ingestion → Agent Analysis → Personalized Alerts → Provider Coordination → Outcome Tracking → Learning"
        />

        <CaptionBox variant="decision">
          <strong>Async-First Communication:</strong> Alerts don't require immediate response. Patients snooze reminders, providers respond in 24 hours, care teams review trends weekly. The design respects that real healthcare is async. Synchronous communication (urgent alerts) is reserved for truly time-critical situations.
        </CaptionBox>

        <ArchitectureDiagram
          title="Multi-Agent Care Coordination System"
          description="Shows how Patient Agent and Coordination Agent work together to surface insights, prevent complications, and improve outcomes."
          diagramType="agent-flow"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Design Achievements',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Proactive Coordination Agents',
            description: 'Agents actively manage medication reminders, coordinate appointments, flag health trends. Not a passive portal—a system that works FOR the patient.',
            metric: 'Multi-agent system + proactive alerts',
          },
          {
            title: 'Role-Specific Interfaces',
            description: 'Patient sees relevant health status and reminders. Provider sees coordinated care view across specialties. Care team sees high-risk alerts and interventions.',
            metric: '3 distinct role-based interfaces',
          },
          {
            title: 'Async Communication by Design',
            description: 'Built for busy healthcare. Patients get reminders without real-time conversation. Providers respond within 24 hours. No urgent stuff falls through.',
            metric: 'Async message + coordination system',
          },
        ]}
        title="What This Project Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Design">
          <CTAButton label="Figma Prototype (Concept)" href="#prototype" type="figma" />
          <CTAButton label="Patient Dashboard Mockup" href="#patient" type="prototype" />
          <CTAButton label="Care Coordination Flows" href="#flows" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'Healthcare UX Design',
            'Patient Experience Design',
            'Agentic Coordination UI',
            'Multi-Stakeholder Design',
            'Health Data Visualization',
            'Async Communication Patterns',
            'Proactive Notification Design',
            'Healthcare Workflow Design',
          ]}
        />
      </>
    ),
  },
  {
    id: 'learnings',
    title: 'Key Learnings',
    content: (
      <>
        <p className="mb-4">
          <strong>Insight 1: Patients Want Simplicity More Than Features</strong> - Patient portals are feature-rich but patient-hostile. Patients want one place to check health status and get reminders. That's it.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Care Coordination is a System Problem</strong> - You can't fix care coordination with better messaging. You need agents that see the whole picture and surface what's important.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Proactivity Matters More Than Reactivity</strong> - System that tells patients "Your appointment is tomorrow" is nice. System that prevents missed doses and preventable complications is valuable.
        </p>
        <p>
          <strong>Insight 4: Trust Takes Time</strong> - Patients don't immediately trust an AI health system. Start with low-stakes coordination (reminders) and build trust over time.
        </p>
      </>
    ),
  },
];

export const enterpriseSections: CaseStudySection[] = [
  {
    id: 'intro',
    title: '',
    content: (
      <ProjectIntro
        title="Enterprise SaaS & Design Systems"
        subtitle="6+ Years of Multi-Domain Product Leadership"
        status="live"
        tagline="Financial Services · Healthcare · Logistics"
        description="Enterprise product portfolio spanning design systems, complex workflows, data visualization, and AI-native experiences. Designed and shipped products used by millions of professionals daily across financial services, healthcare, and logistics domains. Focus on scalability, accessibility, and human-centered design in complex problem spaces."
      />
    ),
  },
  {
    id: 'overview',
    title: 'Years of Enterprise Product Design',
    content: (
      <>
        <p className="mb-4">
          <strong>Enterprise Product Portfolio</strong> spans design systems, complex workflows, data visualization, and AI-native experiences across financial, healthcare, and logistics platforms.
        </p>
        <p className="mb-4">
          Rather than showcase a single project, this represents experience designing and shipping products that millions of professionals rely on daily, with emphasis on scalability, accessibility, and human-centered design in complex domains.
        </p>
        <p className="text-white/70">
          <strong>Status:</strong> Production portfolio from 6+ years of enterprise product design leadership.
        </p>
      </>
    ),
  },
  {
    id: 'domains',
    title: 'Domains & Problem Spaces',
    content: (
      <>
        <p className="mb-4">
          <strong>Financial Services:</strong> Payment systems, settlement platforms, risk management dashboards, compliance reporting. Focus: speed, accuracy, and audit trails at scale.
        </p>
        <p className="mb-4">
          <strong>Healthcare Tech:</strong> Clinical workflows, patient management, regulatory compliance, data security. Focus: life-critical decision support, accessibility, and regulatory adherence.
        </p>
        <p className="mb-4">
          <strong>Logistics & Operations:</strong> Fleet management, supply chain visibility, resource allocation. Focus: real-time data visualization, field operations, mobile-first design.
        </p>
        <p className="mb-4">
          <strong>SaaS Platforms:</strong> Multi-tenant systems, customizable workflows, embedded analytics. Focus: developer experience, API-first design, extensibility.
        </p>
      </>
    ),
  },
  {
    id: 'design-systems',
    title: 'Design Systems & Scalability',
    content: (
      <>
        <p className="mb-4">
          <strong>Design System Leadership:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Built and maintained enterprise design systems serving 50+ product teams</li>
          <li>Scaled from 20 components to 200+ with semantic versioning and clear deprecation paths</li>
          <li>Established component governance, contribution guidelines, and documentation</li>
          <li>Reduced design-to-dev handoff friction by 60% through component library standardization</li>
        </ul>
        <p className="mb-4">
          <strong>Key Principles:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Composable, not rigid - components nest and adapt, not constrain</li>
          <li>Accessibility-first - all components meet WCAG AA by default</li>
          <li>Dark/light modes - systems that work across themes, not retrofitted</li>
          <li>Mobile-first breakpoints - thinking in dimensions, not device names</li>
          <li>Semantic tokens - colors, spacing, typography scale with intent, not visual name</li>
        </ul>
      </>
    ),
  },
  {
    id: 'complex-workflows',
    title: 'Complex Workflow Design',
    content: (
      <>
        <p className="mb-4">
          <strong>Enterprise Workflows are Non-Linear and Context-Dependent:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Payment Processing:</strong> Designed workflows handling 1000s of daily transactions, with exception handling, fraud detection, and regulatory compliance built into every step</li>
          <li><strong>Claims Management:</strong> Parallel workflows for eligibility verification, processing, appeals, and denial management—each with different rules and priorities</li>
          <li><strong>Settlement Platforms:</strong> Real-time dashboards supporting bilateral negotiation, contract term management, and dispute resolution</li>
          <li><strong>Supply Chain Visibility:</strong> Multi-step workflows coordinating across vendors, shippers, and receiving parties in real-time</li>
        </ul>
        <p className="mb-4">
          <strong>Design Approach:</strong> Map workflows as graphs, not linear flows. Surface decision points clearly. Make exception handling visible.
        </p>
      </>
    ),
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization & Analytics',
    content: (
      <>
        <p className="mb-4">
          <strong>Enterprise dashboards must balance:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Summary vs. Detail:</strong> One screen should show health of the system, with drill-down available for investigation</li>
          <li><strong>Real-Time vs. Historical:</strong> Surface alerts and current status while supporting trend analysis and forecasting</li>
          <li><strong>Breadth vs. Depth:</strong> Serve different user roles (exec, analyst, operator) from same dashboard through progressive disclosure</li>
          <li><strong>Aesthetic vs. Functional:</strong> Data viz should be beautiful but never at the cost of clarity. A chart that looks good but misleads is worse than a plain table.</li>
        </ul>
        <p className="mb-4">
          <strong>Specific Examples:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Real-time payment flows showing money in motion (geographic distribution, volume, status)</li>
          <li>Healthcare outcome dashboards correlating interventions to patient results</li>
          <li>Supply chain heat maps showing bottlenecks and risk concentration</li>
        </ul>
      </>
    ),
  },
  {
    id: 'design-principles',
    title: 'Enterprise Design Principles in Action',
    content: (
      <>
        <p className="mb-4">
          <strong>Core Principles Applied Across All Domains:</strong>
        </p>

        {/* Component Hierarchy */}
        <KeyDecisions
          decisions={[
            {
              problem: 'How to serve both financial analysts and field operators from the same design system?',
              considered: ['Separate systems for each', 'One generic system', 'Context-aware components', 'Role-based UI builders'],
              chosen: 'Composable components with role-based layouts',
              reasoning: 'Design system provides foundation (buttons, inputs, charts). Layouts and information hierarchy change by role. Analyst sees summary + drill-down; operator sees real-time status + action buttons. One system, infinite configurations.',
            },
            {
              problem: 'How to make enterprise dashboards fast without sacrificing comprehensiveness?',
              considered: ['Load everything at once', 'Progressive loading', 'Separate views for each role', 'Smart caching'],
              chosen: 'Progressive disclosure + virtual scrolling + smart caching',
              reasoning: 'Show summary immediately, load detail on demand. Cache frequently-accessed data. Never make users wait for data they don\'t need right now. This pattern works across payment dashboards, healthcare analytics, and supply chain systems.',
            },
            {
              problem: 'Should complex workflows be linear step-by-step or allow context-jumping?',
              considered: ['Strict linear', 'Free-form jumping', 'Smart recommendations', 'Power-user shortcuts'],
              chosen: 'Linear default with power-user shortcuts',
              reasoning: 'Novices need guidance; experts need speed. Show happy path for new users. Keyboard shortcuts and advanced navigation for experienced operators. Both groups in one UI.',
            },
          ]}
        />

        {/* Enterprise UI Showcase */}
        <UIShowcase
          components={[
            {
              title: 'Design System Component Library',
              description: 'Shared components: Buttons, Inputs, Tables, Charts, Modals serving 50+ product teams. Semantic tokens for colors, spacing, typography.',
              type: 'card',
            },
            {
              title: 'Real-Time Payment Dashboard',
              description: 'Shows money in motion: transaction volume, geographic distribution, status, exceptions. Drill-down to individual transactions with full audit trail.',
              type: 'state',
            },
            {
              title: 'Healthcare Analytics Dashboard',
              description: 'Correlates patient interventions to outcomes. Shows trends, cohort comparisons, risk scores. Different views for clinician, analyst, hospital admin.',
              type: 'state',
            },
            {
              title: 'Supply Chain Visibility Map',
              description: 'Real-time location and status of shipments. Heat map showing bottlenecks. Risk indicators for delays. Drill-down to shipment details.',
              type: 'flow',
            },
            {
              title: 'Complex Workflow Builder',
              description: 'Define non-linear workflows for payment processing, claims handling, settlements. Visual builder with drag-drop, condition logic, approval gates.',
              type: 'modal',
            },
            {
              title: 'Role-Based Layout System',
              description: 'Same data, different layouts: Executive (summary KPIs), Analyst (detailed trends), Operator (action-oriented). Switch views instantly.',
              type: 'flow',
            },
          ]}
        />

        {/* Design System Architecture */}
        <AIArchitecture
          components={[
            {
              name: 'Design Tokens',
              description: 'Semantic color, spacing, typography, and animation tokens shared across all products',
              type: 'input',
            },
            {
              name: 'Component Library',
              description: 'Composable components: Buttons, Inputs, Tables, Charts, Modals—all accessible and themeable',
              type: 'process',
            },
            {
              name: 'Layout Patterns',
              description: 'Reusable layouts: Dashboard grids, form layouts, modal structures, navigation patterns',
              type: 'process',
            },
            {
              name: 'Role-Based Contexts',
              description: 'Different information hierarchies and action sets for analyst, operator, admin, executive roles',
              type: 'decision',
            },
            {
              name: 'Consistent Experience',
              description: 'Users move between payment systems, healthcare apps, supply chain platforms—but UI feels familiar',
              type: 'output',
            },
            {
              name: 'Rapid Feature Shipping',
              description: 'Product teams build from components, not from scratch. Time to market cut by 40%+',
              type: 'output',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-screens-enterprise',
    title: 'Cross-Domain Enterprise Interfaces',
    content: (
      <>
        <HeroScreen
          title="Design System Component Library"
          description="Shared component reference showing 200+ reusable, accessible, themeable components serving 50+ product teams across payments, healthcare, and logistics."
          placeholder="Enterprise Design System Component Library"
          variant="desktop"
        />

        <CaptionBox variant="insight">
          <strong>Design Decision:</strong> The design system is opinionated (semantic tokens, accessibility required), but flexible (components compose freely, no constraints). This lets 50+ teams ship faster while maintaining brand coherence. Teams don't ask permission; they build from composable blocks.
        </CaptionBox>

        <UIScreensGallery
          title="Domain-Specific Dashboard Examples"
          screens={[
            {
              title: 'Payment Dashboard: Money in Motion',
              description: 'Real-time transaction flow visualization. Geographic heatmap, volume trends, exception alerts. Drill-down to individual transactions with full audit trail.',
              aspect: 'desktop',
              context: 'Serves finance teams and compliance officers',
            },
            {
              title: 'Healthcare Analytics: Outcomes Correlation',
              description: 'Links patient interventions to outcomes. Cohort comparisons, risk stratification, trend analysis. Different views for clinicians vs. administrators.',
              aspect: 'desktop',
              context: 'Serves clinicians, analysts, and hospital leadership',
            },
            {
              title: 'Supply Chain Visibility: Risk Heat Map',
              description: 'Real-time shipment locations with bottleneck indicators. Risk scoring for delays. Drill-down to vendor, shipment, receiving details.',
              aspect: 'square',
              context: 'Serves operations and strategic procurement',
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 'visual-flows-enterprise',
    title: 'Enterprise Workflow Architecture',
    content: (
      <>
        <FlowDiagram
          title="Complex Multi-Domain Workflow Example: Payment Processing"
          description="Non-linear workflow showing transaction intake, fraud detection, compliance checks, approval gates, and settlement—applicable across payment, healthcare, and supply chain domains."
          flowType="process-flow"
          placeholder="Intake → Validation → Compliance Check → Exception Handling → Approval Gate → Settlement → Audit Log"
        />

        <CaptionBox variant="decision">
          <strong>Workflow Philosophy:</strong> Enterprise workflows are NOT simple step-by-step. They're graphs with decision points, parallel branches, and exception handlers. Designers must visualize the graph, not hide it. End users (operators, approvers) need to understand the workflow structure to work effectively.
        </CaptionBox>

        <ArchitectureDiagram
          title="Design System Architecture: Tokens → Components → Experience"
          description="Shows how semantic design tokens flow into composable components, which combine into domain-specific layouts, enabling fast shipping while maintaining consistency."
          diagramType="system-architecture"
        />
      </>
    ),
  },
  {
    id: 'key-achievements',
    title: 'Key Achievements Across Domains',
    content: (
      <AchievementsGrid
        achievements={[
          {
            title: 'Design Systems at Scale',
            description: 'Built and maintained enterprise design systems serving 50+ teams. Scaled from 20 to 200+ components with governance, documentation, and deprecation paths.',
            metric: '200+ components · 50+ teams',
          },
          {
            title: 'Complex Workflow Mastery',
            description: 'Designed non-linear workflows for payment processing, claims management, supply chain coordination—handling edge cases, exceptions, and regulatory compliance.',
            metric: 'Financial · Healthcare · Logistics',
          },
          {
            title: 'Real-Time Data Visualization',
            description: 'Built dashboards balancing summary/detail, real-time/historical, breadth/depth. Serving different roles (exec/analyst/operator) from same interface.',
            metric: 'Multi-domain · multi-role dashboards',
          },
        ]}
        title="What This Portfolio Demonstrates"
      />
    ),
  },
  {
    id: 'cta',
    title: '',
    content: (
      <>
        <CTASection title="View the Case Studies">
          <CTAButton label="Design System Docs" href="#design-system" type="figma" />
          <CTAButton label="Workflow Patterns & Flows" href="#workflows" type="prototype" />
          <CTAButton label="Dashboard Mockups" href="#dashboards" type="prototype" />
        </CTASection>

        <SkillHighlights
          skills={[
            'Enterprise Product Design',
            'Design Systems & Governance',
            'Complex Workflow Design',
            'Data Visualization & Analytics',
            'Multi-Stakeholder Design',
            'Design Leadership',
            'Accessibility (WCAG AA+)',
            'Financial · Healthcare · Logistics',
          ]}
        />
      </>
    ),
  },
  {
    id: 'key-learnings',
    title: 'Learnings from Enterprise Scale',
    content: (
      <>
        <p className="mb-4">
          <strong>Insight 1: Simplicity is Competitive Advantage</strong> - Enterprises are burdened with complex, hard-to-use software. A product that makes work faster AND easier wins.
        </p>
        <p className="mb-4">
          <strong>Insight 2: Accessibility is Economic Value</strong> - Accessible design serves everyone better: color-blind users, aging workforce, and users in high-distraction environments all benefit from high-contrast, clear design.
        </p>
        <p className="mb-4">
          <strong>Insight 3: Design Systems Compound</strong> - The better your design system, the faster your teams ship and the more consistent your product becomes. This is not overhead; it's leverage.
        </p>
        <p className="mb-4">
          <strong>Insight 4: Context is Everything</strong> - The same product used by an analyst and a field operator needs different interfaces. One size never fits all.
        </p>
        <p>
          <strong>Insight 5: Trust Scales Organizations</strong> - Enterprise customers need to trust your product with critical operations. Over-promising features and under-delivering on quality kills that trust.
        </p>
      </>
    ),
  },
];
