export interface MyApplication {
  pk: number;
  id: number;
  applicant: string;
  cover_letter: string;
  job_title: string;
  job: number;
  applied_at: string;
  is_selected: "ACCEPTED" | "REJECTED" | "PENDING";
  selection_reply: string;
}
