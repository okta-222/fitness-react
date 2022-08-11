export type SchemaProps = {
    property: {
      title: string;
      text: string;
    }; 
  };
  
  export default function schemaCard({ property }: SchemaProps) {
    const {  title, text } = property;
    return (
      <div className="box">
        <div className="box1"><i className="fa-solid fa-download"></i></div>
          <h5>{title}</h5>
          <h3>{text}</h3>
          <p>Fitness Pro tracks your<br/> workouts, get better <br/>
              results, and be the best<br/> version of you.</p>
      </div>
    );
  }



