import StarRating from './StarRating';

interface Props {
  name: string;
  level: number;
}

const SkillsCard = ({ name, level }: Props) => (
  <div className="SkillsCard">
    <div>{name}</div>
    <StarRating rating={level} />
  </div>
);

export default SkillsCard;
