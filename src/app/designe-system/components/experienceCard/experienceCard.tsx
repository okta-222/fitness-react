export type SalessProps = {
    property: {
      img: string;
      title: string;
      text: string;
      price: string;
    }; 
  };
  
  export default function SalesUsCard({ property }: SalessProps) {
    const { img, title, text, price } = property;
    return (
      <div className="box">
        <img src={img} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="info">
          <h2>{price}</h2>
          <a href="">
            аказаитдете <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    );
  }