export type ResultProps = {
    property: {
      img: string;
      title: string;
      text: string;
    }; 
  };
  
  export default function ResultCard({ property }: ResultProps) {
    const { img, title, text } = property;
    return (
      <div className="box">
        <img src={img} alt="" />
          <h2>{title}</h2>
          <h4>{text}</h4>
          <p>Stacks is a production-<br/>
            ready library of stackable<br/>content blocks built in<br/>React Native.
          </p>
      </div>
    );
  }