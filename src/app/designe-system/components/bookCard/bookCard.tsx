export type BookProps = {
    property: {
      img: string;
      title: string;
    }; 
  };
  
  export default function BookCard({ property }: BookProps) {
    const { img, title } = property;
    return (
      <div className="box">
        <img src={img} alt="" />
        <div className="txt">
          <h3>{title}</h3>
          <p>
            You never workout before, it’s now
            <br /> a good start
          </p>
        </div>
      </div>
    );
  }
