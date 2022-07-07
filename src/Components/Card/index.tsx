import { FC } from 'react';
import './style.scss';

export interface CardProps {
  title: string;
  body: string;
  onClick: (value: string) => void;
}

export const Card: FC<CardProps> = ({ title, body, onClick }) => {
  return (
    <div
      className='root'
      onClick={() => {
        onClick(title);
      }}
    >
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  );
};
