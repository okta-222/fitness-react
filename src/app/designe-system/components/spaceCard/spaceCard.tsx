export type SpaceProps = {
    property: {
      img: string;
      title: string;
    }; 
  };
  
  export default function SpaceCard({ property }: SpaceProps) {
    const { img, title } = property;
    return (
      <div className="box">
        <img src={img} alt="" />
          <h3>{title}</h3>

      </div>
    );
  }