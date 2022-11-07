export interface Event {
  title: string;
  schedule: Date;//calendar collection
  place_id: string;//places collection
  organizer_id:string;//organizers collection
  description: string;
  capacity: number;
  requeriments: string[],
  confirmed: boolean;
  cancelled:boolean;
  done: boolean;
}
