import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsUl,
    StatisticsLi,
    StatisticsData,
  } from './Statistics.styled';

import PropTypes from 'prop-types';


export const Statistics = ({ title, stats}) => {
    return <StatisticsSection>
    <StatisticsTitle>{title}</StatisticsTitle>
    {/* {title && (<h2 className={css.title}>{title}</h2>)} */}
  
    <StatisticsUl>
        {stats.map((el) => (
            <StatisticsLi key={el.id}>
            <StatisticsData>{el.label}</StatisticsData>
            <StatisticsData>{el.percentage}%</StatisticsData>
            </StatisticsLi>
        ))}
    </StatisticsUl>
  </StatisticsSection>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};