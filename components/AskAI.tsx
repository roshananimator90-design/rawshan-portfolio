'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export interface AskAIProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const portfolioContext = `
You are a portfolio demo assistant for Rawshan Kumar, an AI Product Designer with expertise in:
- AI Product Design & Agentic UX
- Healthcare technology design
- Enterprise SaaS product design
- Design systems & scalable design
- Human-in-the-loop AI workflows

Portfolio Projects:
1. BizPilot AI - Finance operations platform with human-in-the-loop AI
2. TestGuard - Agentic QA platform with autonomous test agents
3. CliniSight UX Auditor - Healthcare accessibility audit platform
4. RevFlow AI - Healthcare revenue cycle management with AI copilot
5. Care Neu - AI-native patient care coordination platform
6. Enterprise SaaS & Product Work - Design systems and complex workflows

You have access to detailed case studies on each project explaining the design approach,
user problems, AI opportunities, and key learnings.

**IMPORTANT: This is a portfolio demo assistant.** You have access to information from the
portfolio projects above, and can discuss design thinking, AI UX patterns, healthcare design,
and enterprise product design. You are not connected to a real backend API - you're demonstrating
the kind of insights an AI assistant integrated with a portfolio could provide.

Be helpful and enthusiastic about design topics. Ask clarifying questions.
Suggest relevant portfolio projects when appropriate.
`;

const suggestedQuestions = [
  'What are your approaches to human-in-the-loop AI design?',
  'How do you design trust and transparency into AI systems?',
  'What are the key principles for healthcare UX?',
  'Tell me about your AI Product Design philosophy',
  'What design systems work best for AI-native products?',
];

export const AskAI = ({ isOpen, onClose }: AskAIProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple pattern matching for demo responses
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('human-in-the-loop') ||
      lowerMessage.includes('human in the loop')
    ) {
      return `Human-in-the-loop is a core principle in my AI product design work. The idea is that AI should augment human decision-making, not replace it—especially in high-stakes contexts like healthcare and finance.

Key patterns I use:
1. **Transparent Reasoning** - Every AI recommendation shows its logic and confidence level
2. **Easy Override** - Users can reject or modify suggestions with minimal friction
3. **Audit First** - Every action creates an immutable record for compliance
4. **Progressive Complexity** - Simple interface for routine decisions, detailed analysis on demand

You can see this approach detailed in my **BizPilot AI** and **RevFlow AI** case studies, where financial decisions require human approval at every step.`;
    }

    if (lowerMessage.includes('trust') || lowerMessage.includes('transparency')) {
      return `Building trust in AI systems requires transparency and real human control. In my healthcare and enterprise work, I've learned that users don't trust "black box" AI, even if it's accurate.

My approach:
1. **Show Your Work** - Explain the data and logic the AI considered
2. **Make Overrides Easy** - Users must be able to reject recommendations with minimal effort
3. **Audit Trails** - Every decision is logged, showing who made it and why
4. **Graceful Failures** - When AI is uncertain, it escalates to humans

Check out my **CliniSight UX Auditor** case study to see how I designed AI analysis with mandatory human verification in a life-critical domain.`;
    }

    if (lowerMessage.includes('healthcare') || lowerMessage.includes('health')) {
      return `Healthcare product design has unique constraints: life-critical decisions, heavy compliance requirements, diverse users, and high stakes if you get it wrong.

Key principles I follow:
1. **Clarity Over Beauty** - In healthcare, a button that's easy to spot matters more than one that matches brand guidelines
2. **Error Prevention First** - Good healthcare UX prevents mistakes before they happen
3. **Accessibility is Mandatory** - Compliance is the floor, not the goal
4. **Context Matters** - An 8pt font might be fine in a report but dangerous during an emergency

I've designed healthcare products across my portfolio: **CliniSight UX Auditor**, **RevFlow AI**, and **Care Neu** all address different healthcare challenges with AI-native thinking.`;
    }

    if (
      lowerMessage.includes('design system') ||
      lowerMessage.includes('component')
    ) {
      return `Design systems are leverage. The better your system, the faster teams ship and the more consistent your product becomes.

My approach:
1. **Composable, not Rigid** - Components nest and adapt, they don't constrain
2. **Accessibility First** - All components meet WCAG AA by default
3. **Dark/Light Modes** - Design for both from the start, not retrofitted
4. **Semantic Tokens** - Colors, spacing, and typography scale with intent

In my **Enterprise SaaS** work, I built and maintained design systems serving 50+ product teams, scaling from 20 components to 200+. This reduced design-to-dev friction by 60%.`;
    }

    if (
      lowerMessage.includes('agentic') ||
      lowerMessage.includes('autonomous agent')
    ) {
      return `Agentic AI is where the most interesting UX challenges are. Instead of static recommendations, agents make real decisions within guardrails.

Design principles for agentic systems:
1. **Real-Time Visibility** - Users must watch what agents are doing, not just see results
2. **Instant Interruption** - Users can halt agents immediately if they go off track
3. **Evidence-First** - Every finding needs proof, not explanation
4. **Goals Over Scripts** - Give agents high-level goals, they figure out how to achieve them
5. **Humans Retain Veto** - Autonomy works only if humans can stop agents at any time

My **TestGuard** case study shows this in action: autonomous QA agents that explore applications while humans maintain full oversight and control.`;
    }

    // Default response
    return `That's a great question! While I don't have real-time AI processing in this demo, I can discuss design principles, share insights from my portfolio work, or explore specific project approaches.

Feel free to ask me about:
- Human-in-the-loop AI design patterns
- Healthcare product design principles
- Design systems and scalable design
- Agentic UX and autonomous systems
- Enterprise SaaS challenges
- Any of my portfolio projects

What aspect of AI product design interests you most?`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateResponse(input);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-96 bg-dark-surface border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="text-electric-blue" size={20} />
                <h2 className="font-semibold text-white">Ask my AI</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Demo Notice */}
            <div className="px-4 py-2 bg-electric-blue/10 border-b border-electric-blue/20 flex gap-2 text-sm">
              <AlertCircle size={16} className="text-electric-blue flex-shrink-0 mt-0.5" />
              <p className="text-white/80">
                <strong>Portfolio Demo:</strong> Showcasing how AI assistance could work with your portfolio content.
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <Sparkles className="mx-auto mb-4 text-electric-blue/50" size={32} />
                    <h3 className="text-white font-semibold mb-2">Ask about my work</h3>
                    <p className="text-white/60 text-sm">
                      Explore my design thinking, projects, and AI product expertise
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-white/50 font-semibold px-2">Suggested topics:</p>
                    {suggestedQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInput(question);
                          setTimeout(handleSend, 0);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/5 rounded-lg transition-colors border border-white/10 hover:border-white/20"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={clsx(
                        'rounded-lg px-4 py-3 max-w-xs',
                        message.role === 'user'
                          ? 'ml-auto bg-electric-blue/20 text-white'
                          : 'bg-white/5 text-white/90'
                      )}
                    >
                      {message.content}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2 px-4 py-3 bg-white/5 rounded-lg w-fit"
                    >
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                            className="w-2 h-2 bg-electric-blue rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 outline-none focus:border-electric-blue/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={clsx(
                    'p-2 rounded-lg transition-colors flex items-center justify-center',
                    isLoading || !input.trim()
                      ? 'bg-white/5 text-white/30 cursor-not-allowed'
                      : 'bg-electric-blue hover:bg-electric-blue/80 text-white'
                  )}
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-white/40 text-center">
                This is a demo showcasing portfolio-integrated AI assistance
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
