import React, { Dispatch, FC, LegacyRef, SetStateAction, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/header/Header';
import MainLayout from '../../components/layout/mainLayout';
import Button from '../../components/ui/button/Button';
import SubNav from '../../components/layout/header/subNav/SubNav';
import styles from './styles.module.scss';
import { ArrowLeft, DollarSign } from 'react-feather';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addStrategy } from 'store/strategies/strategiesSlice';
import { Istrategy } from 'store/strategies/types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Input from '../../components/ui/input/Input';
interface Iprefill {
  name: string;
  capital: string;
}
const CreatePage: FC = props => {
  const [fields, setFields]: any = useState({});
  const refNameInput = useRef<HTMLInputElement>(null);
  const refCapitalInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (localStorage.getItem('fillInForm')) {
      const preFill: string | Iprefill = JSON.parse(localStorage.getItem('fillInForm') || '');

      if (typeof preFill === 'object' && refNameInput.current !== null && refCapitalInput.current !== null) {
        const newFields = {
          ...fields,
          name: preFill.name,
          capital: preFill.capital
        };
        setFields(newFields);
      }
      localStorage.removeItem('fillInForm');
    }
  }, []);

  useEffect(() => {
    console.log(fields);
  }, [fields]);
  const dispatch = useDispatch();
  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newFields = {
      ...fields,
      [evt.target.name]: evt.target.value
    };
    setFields(newFields);
  };
  const handleDateInput = (date: Date | null, when: string) => {
    setFields((prevState: Istrategy) => ({
      ...prevState,
      range: {
        ...prevState.range,
        [when]: date
      }
    }));
  };
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      addStrategy({
        name: fields.name,
        capital: fields.capital,
        range: {
          start: fields.range.start,
          end: fields.range.end
        }
      })
    );
    alert('strategy created successfully');
  };
  return (
    <>
      <Header
        subNav={
          <SubNav>
            <Link className={styles.link} to=".." relative="path">
              <ArrowLeft width="20" height="20" />
              back
            </Link>
            <Link to="/select" relative="path">
              select strategy
            </Link>
          </SubNav>
        }
      ></Header>
      <MainLayout>
        <div className={styles.content}>
          <h1 className={styles.heading}>Create strategy</h1>
          <p className={styles.text}>Fact: Interes rate on bank cash deposits will never beat inflation</p>
          <form onSubmit={evt => handleSubmit(evt)}>
            <Input
              value={fields.name}
              setRef={refNameInput}
              name="name"
              type="text"
              label={'Strategy name'}
              required={true}
              onChange={evt => handleInput(evt)}
            />
            <Input
              value={fields.capital}
              icon={<DollarSign width="15" height="15" color="var(--blue)" />}
              setRef={refCapitalInput}
              name="capital"
              type="number"
              label={'Strategy Capital'}
              required={true}
              onChange={evt => handleInput(evt)}
            />
            <div className={styles.dateContainer}>
              <DatePicker
                required
                selected={fields?.range?.start ? fields.range.start : new Date()}
                name="start"
                onChange={date => handleDateInput(date, 'start')}
                placeholderText="start date"
              />
              <DatePicker
                required
                selected={fields?.range?.end ? fields.range.end : new Date()}
                name="end"
                onChange={date => handleDateInput(date, 'end')}
                placeholderText="end date"
              />
            </div>
            <Button type="submit" theme="light">
              Create Strategy
            </Button>
          </form>
        </div>
      </MainLayout>
    </>
  );
};

export default CreatePage;
