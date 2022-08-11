export type  VideoProps = {
    property: {
      title: string;
      text: string;
    }; 
  };
  
  export default function VideoCard({ property }: VideoProps) {
    const {  title, text } = property;
    return (
      <div className="box">
        <span className="one">{title}</span>
          <h3>{text}</h3>
          <p>Track your workouts, get better<br/> results, and be the best
              version of<br/> you. Less thinking, more lifting.
          </p>
      </div>
    );
  }