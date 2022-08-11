export type  TrainersProps = {
  property: {
    img:string;
    title: string;
    text: string;
  }; 
};

export default function TrainersCard({ property }: TrainersProps) {
  const {  img,title, text } = property;
  return (
    <div className="box-img">
      <img src={img} alt="" />
      <span className="one">{title}</span>
        <h3>{text}</h3>
        <p>Track your workouts, get better<br/> results, and be the best
            version of<br/> you. Less thinking, more lifting.
        </p>
    </div>
  );
}