import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

interface WidgetCardProps {
  title: string;
  value: number;
  percentage: number;
  color: string;
  isvalue: boolean;
  Icon: React.ReactNode;
}

const WidgetCard = ({
  title,
  value,
  percentage,
  color,
  isvalue,
  Icon,
}: WidgetCardProps) => {
  return (
    <article className="widgetCard">
      <div className="widget-icon">{Icon}</div>
      <div className="widget-info">
        <p>{title}</p>
        <h4>{isvalue ? `$${value}` : value}</h4>
        {percentage > 0 ? (
          <div className="profit">
            <FaArrowTrendUp /> +{percentage}%
          </div>
        ) : (
          <div className="loss">
            <FaArrowTrendDown />
            {percentage}%
          </div>
        )}
      </div>
      <div
        className="circle-per"
        style={{
          background: `conic-gradient(${color} ${
            (Math.abs(percentage) / 100) * 360
          }deg ,rgb(225,225,255) 0)`,
        }}
      >
        <span
          style={{
            color: `${color}`,
          }}
        >
          {percentage}%
        </span>
      </div>
    </article>
  );
};

export default WidgetCard;
