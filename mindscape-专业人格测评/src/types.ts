export type TestCategory = 'personality' | 'career' | 'health' | 'fun';

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
    score?: Record<string, number>;
  }[];
  isLieDetector?: boolean; // For consistency checks
}

export interface Test {
  id: string;
  title: string;
  description: string;
  category: TestCategory;
  subCategory?: string;
  questions: Question[];
  calculateResult: (answers: Record<string, string>) => TestResult;
}

export interface DimensionScore {
  name: string;
  value: number;
  fullMark: number;
}

export interface Suggestion {
  text: string;
  actionSteps: string[];
}

export interface InterpretationSection {
  title: string;
  icon: 'briefcase' | 'heart' | 'zap' | 'target' | 'shield' | 'star' | 'lightbulb' | 'alert-circle';
  content: string[];
}

export interface DetailedInterpretation {
  strengths: string[];
  challenges: string[];
  suggestions: Suggestion[];
  career?: string[];
  relationships?: string[];
  customSections?: InterpretationSection[];
}

export interface TestResult {
  title: string;
  description: string;
  label?: string; // e.g., "INFJ", "4w5"
  traits: { label: string; value: string | number }[];
  scores: DimensionScore[];
  interpretation?: DetailedInterpretation;
  consistencyScore?: number; // 0-100
  isAmbiguous?: boolean;
  ambiguityNote?: string;
  advancedInfo?: {
    label: string;
    value: string;
  }[];
}

export interface SavedResult extends TestResult {
  id: string;
  testId: string;
  testTitle: string;
  date: string;
}
