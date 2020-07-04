import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { withApollo } from 'react-apollo';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Button, Input, AppSelect, AppFile, Checkbox } from 'components';

import { SAVE_NONRESIDENT } from 'graphql/mutation';

import Block from './FormNonresident.style.js';

@withRouter
@withApollo
export default class FormNonresident extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['site', 'landing']),
    worry: PropTypes.array
  };

  static defaultProps = {
    type: 'site',
    worry: []
  };

  state = {
    isValid: false,
    fio: '',
    fioIsActive: false,
    fioIsRequired: true,
    fioErrorText: '',
    fioIsValid: false,
    fioIsSleep: true,
    phone: '',
    phoneErrorText: '',
    phoneIsValid: false,
    phoneIsActive: false,
    phoneIsRequired: true,
    phoneIsSleep: true,
    worry: '',
    worryTextError: '',
    worryIsRequired: true,
    worryIsValid: false,
    isSent: false,
    city: '',
    cityIsActive: false,
    cityErrorText: '',
    cityIsRequired: true,
    cityIsValid: false,
    cityIsSleep: true,
    age: '',
    ageIsActive: false,
    ageIsRequired: true,
    ageErrorText: '',
    ageIsValid: false,
    ageIsSleep: true,
    fileErrorText: '',
    fileData: [],
    sex: 0,
    sexErrorText: 'Выберите пол',
    sexErrorIsShow: false,
    text: '',
    textIsActive: false,
    textIsRequired: false,
    textErrorText: '',
    textIsValid: false,
    textIsSleep: true,
    email: '',
    emailIsActive: false,
    emailIsRequired: false,
    emailErrorText: '',
    emailIsValid: false,
    emailIsSleep: true
  };

  componentDidMount() {
    if (process.browser) {
      window.addEventListener('resize', this.resize);
    }
  }

  onChange = (e) => {
    const target = e.nativeEvent.target;

    if (target && target.name) {
      this.setState({
        [target.name]: target.value
      });

      target.isChecked = true;
    }
  };

  cityChange = (e) => {
    const target = e.nativeEvent.target;

    if (target && target.name) {
      this.setState({
        [target.name]: target.value
      });

      target.isChecked = true;
    }
  };

  onBlurFio = () => {
    const value = this.state.fio;

    this.setState((state) => {
      return {
        fioIsActive: value ? true : false
      };
    });

    this.validateFio();
  };

  onBlurCity = () => {
    const value = this.state.city;

    this.setState((state) => {
      return {
        cityIsActive: value ? true : false
      };
    });

    this.validateCity();
  };

  onBlurAge = () => {
    const value = this.state.age;

    this.setState((state) => {
      return {
        ageIsActive: value ? true : false
      };
    });

    this.validateAge();
  };

  onBlurText = () => {
    const value = this.state.text;

    this.setState((state) => {
      return {
        textIsActive: value ? true : false
      };
    });

    this.validateText();
  };

  onFocusFio = () => {
    this.setState((state) => {
      return {
        fioIsActive: true,
        fioIsSleep: false,
        fioIsValid: true
      };
    });
  };

  onFocusText = () => {
    this.setState((state) => {
      return {
        textIsActive: true,
        textIsSleep: false,
        textIsValid: true
      };
    });
  };

  onFocusCity = () => {
    this.setState((state) => {
      return {
        cityIsActive: true,
        cityIsSleep: false,
        cityIsValid: true
      };
    });
  };

  onFocusAge = () => {
    this.setState((state) => {
      return {
        ageIsActive: true,
        ageIsSleep: false,
        ageIsValid: true
      };
    });
  };

  validateFio = () => {
    if (this.state.fioIsRequired) {
      let isNotEmpty = false;
      let isValid = false;

      if (this.state.fio.length < 1) {
        this.setState((state) => {
          return {
            fioErrorText: 'Введите имя'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          fioIsValid: isValid
        };
      });
    }
  };

  validateText = () => {
    if (this.state.textIsRequired) {
      let isNotEmpty = false;
      let isValid = false;

      if (this.state.text.length < 1) {
        this.setState((state) => {
          return {
            textErrorText: 'Введите комментарий'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          textIsValid: isValid
        };
      });
    }
  };

  validateCity = () => {
    if (this.state.cityIsRequired) {
      let isNotEmpty = false;
      let isValid = false;

      if (this.state.city.length < 1) {
        this.setState((state) => {
          return {
            cityErrorText: 'Введите город'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          cityIsValid: isValid
        };
      });
    }
  };

  validateAge = () => {
    if (this.state.ageIsRequired) {
      let isNotEmpty = false;
      let isValid = false;

      if (this.state.age.length < 1) {
        this.setState((state) => {
          return {
            ageErrorText: 'Укажите возраст'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          ageIsValid: isValid
        };
      });
    }
  };

  worryChange = (e) => {
    const newWorry = e.value;
    this.setState({
      worry: newWorry
    });

    setTimeout(this.validateWorry, 100);
  };

  validateWorry = () => {
    if (this.state.worryIsRequired) {
      let isNotEmpty = false;
      let isValid = false;

      if (this.state.worry.length < 1) {
        this.setState((state) => {
          return {
            worryTextError: 'Выберите клинику'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          worryIsValid: isValid
        };
      });
    }
  };

  onFocusPhone = () => {
    this.setState((state) => {
      return {
        phoneIsActive: true,
        phoneIsSleep: false,
        phoneIsValid: true
      };
    });
  };

  onFocusEmail = () => {
    this.setState((state) => {
      return {
        emailIsActive: true,
        emailIsSleep: false,
        emailIsValid: true
      };
    });
  };

  onBlurPhone = (e) => {
    const value = this.state.phone;

    this.setState((state) => {
      return {
        phoneIsActive: value ? true : false,
        phoneIsSleep: false
      };
    });

    this.validatePhone(e);
  };

  onBlurEmail = (e) => {
    const value = this.state.email;

    this.setState((state) => {
      return {
        emailIsActive: value ? true : false,
        emailIsSleep: false
      };
    });

    this.validateEmail(e);
  };

  validatePhone = (e) => {
    if (this.state.phoneIsRequired) {
      let isNotEmpty = false;
      let isValid = false;
      const phone = this.state.phone;
      const isFocus = document.activeElement === e.nativeEvent.target;

      if ((isFocus && phone.length < 1) || (!isFocus && phone.length !== 17)) {
        this.setState((state) => {
          return {
            phoneErrorText: 'Заполните поле'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;

      this.setState((state) => {
        return {
          phoneIsValid: isValid
        };
      });
    }
  };

  validateEmail = (e) => {
    const isFocus = document.activeElement === e.nativeEvent.target;
    const email = this.state.email;
    const regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    let isValid = false;

    if (this.state.emailIsRequired) {
      let isNotEmpty = false;

      if (email.length < 1) {
        this.setState((state) => {
          return {
            emailErrorText: 'Заполните поле'
          };
        });
      } else {
        isNotEmpty = true;
      }

      isValid = isNotEmpty;
    } else {
      isValid = true;
      if (email.length > 0 && !isFocus && !email.match(regexp)) {
        isValid = false;
        this.setState((state) => {
          return {
            emailErrorText: 'Введите корректный адрес'
          };
        });
      }
    }

    this.setState((state) => {
      return {
        emailIsValid: isValid
      };
    });
  };

  onPhoneChange = (e) => {
    const target = e.nativeEvent.target;
    const value = target.value.replace(/\D/, '');

    if (target && target.name) {
      this.setState({
        [target.name]: value
      });

      target.isChecked = true;
    }

    this.validatePhone(e);
  };

  onEmailChange = (e) => {
    const target = e.nativeEvent.target;
    const value = target.value;

    if (target && target.name) {
      this.setState({
        [target.name]: value
      });

      target.isChecked = true;
    }

    this.validateEmail(e);
  };

  onAgeChange = (e) => {
    const target = e.nativeEvent.target;
    const value = target.value.replace(/\D/, '');
    const length = value.length;

    this.setState({
      ageIsValid: true
    });

    if (target && target.name) {
      if (length < 3) {
        this.setState({
          [target.name]: value
        });
      }
      target.isChecked = true;
    }

    this.validateAge();
  };

  fileChange = (e) => {
    const target = e.nativeEvent.target;
    const files = target.files;
    const filesArray = this.state.fileData;

    for (let i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }

    this.setState({
      fileData: filesArray
    });
  };

  fileRemove = (e) => {
    e.preventDefault();
    const target = e.nativeEvent.target;
    const id = target.dataset.id;

    this.setState(({ fileData }) => {
      fileData.splice(id, 1);

      return {
        fileData: fileData
      };
    });
  };

  sexChange = (e) => {
    const target = e.nativeEvent.target;
    const value = parseInt(target.value, 10);

    if (target && target.name) {
      this.setState({
        [target.name]: value
      });

      target.isChecked = true;
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { client } = this.props;
    const appData = {
      city: this.state.city,
      name: this.state.fio,
      age: this.state.age,
      sex: this.state.sex
    };

    if (
      this.state.fioIsValid &&
      this.state.phoneIsValid &&
      this.state.cityIsValid &&
      this.state.sex
    ) {
      client
        .mutate({
          mutation: SAVE_NONRESIDENT,
          variables: {
            city: this.state.city,
            name: this.state.fio,
            age: this.state.age,
            gender: this.state.sex,
            worry: this.state.worry,
            text: this.state.text,
            phone: this.state.phone
          }
        })
        .then((res) => {
          if (res.data) {
            this.setState({
              isSent: true
            });
          }
        });
    } else {
      if (!this.state.fioIsValid && this.state.fioIsRequired) {
        this.setState({
          fioErrorText: 'Введите имя',
          fioIsSleep: false
        });
      }

      if (!this.state.phoneIsValid && this.state.phoneIsRequired) {
        this.setState({
          phoneErrorText: 'Введите номер телефона',
          phoneIsSleep: false
        });
      }

      if (!this.state.worryIsValid && this.state.worryIsRequired) {
        this.setState({
          worryTextError: 'Выберите клинику',
          worryIsSleep: false
        });
      }

      if (!this.state.ageIsValid && this.state.ageIsRequired) {
        this.setState({
          ageErrorText: 'Укажите возраст',
          ageIsSleep: false
        });
      }

      if (!this.state.textIsValid && this.state.textIsRequired) {
        this.setState({
          textErrorText: 'Напишите комментарий',
          textIsSleep: false
        });
      }

      if (!this.state.sex) {
        this.setState({
          sexErrorText: 'Укажите пол',
          sexErrorIsShow: true
        });
      }
    }
  };

  render() {
    const { type, name, title, worry } = this.props;

    const {
      fioIsSleep,
      fioIsValid,
      cityIsSleep,
      cityIsValid,
      phoneIsSleep,
      phoneIsValid,
      worryIsValid,
      isSent,
      ageIsSleep,
      ageIsValid,
      textIsSleep,
      textIsValid,
      emailIsSleep,
      emailIsValid
    } = this.state;

    const providerProps = {
      type
    };

    // Чтобы выбранный элемент в списке не имел фона по умолчанию
    const colourStyles = {
      option: () => {
        return {
          backgroundColor: 'white'
        };
      }
    };

    const cityBlockIsValid = cityIsSleep ? true : cityIsValid;
    const fioBlockIsValid = fioIsSleep ? true : fioIsValid;
    const textBlockIsValid = textIsSleep ? true : textIsValid;
    const phoneBlockIsValid = phoneIsSleep ? true : phoneIsValid;
    const emailBlockIsValid = emailIsSleep ? true : emailIsValid;
    const ageBlockIsValid = ageIsSleep ? true : ageIsValid;
    const answerText =
      'Сотрудник call-центра свяжется с&nbsp;вами для подтверждения даты и&nbsp;времени приема';

    return (
      <ThemeProvider theme={{ props: providerProps }}>
        <Block>
          {title && !isSent && <Block.Title dangerouslySetInnerHTML={{ __html: title }} />}

          {!isSent && (
            <Block.Form name={name}>
              <Block.Inner>
                <Block.Row>
                  <Block.Item>
                    <Input
                      name='city'
                      value={this.state.city}
                      labelText='Город проживания'
                      isChecked={false}
                      onValueChange={this.cityChange}
                      onBlur={this.onBlurCity}
                      isActive={this.state.cityIsActive}
                      isValid={cityBlockIsValid}
                      onFocus={this.onFocusCity}
                      errorText={this.state.cityErrorText}
                    />
                  </Block.Item>

                  <Block.Item>
                    <Input
                      name='fio'
                      value={this.state.fio}
                      labelText='Представьтесь, пожалуйста'
                      isChecked={false}
                      onValueChange={this.onChange}
                      onBlur={this.onBlurFio}
                      isActive={this.state.fioIsActive}
                      isValid={fioBlockIsValid}
                      onFocus={this.onFocusFio}
                      errorText={this.state.fioErrorText}
                    />
                  </Block.Item>
                </Block.Row>

                <Block.Row double>
                  <Block.Item>
                    <Input
                      name='age'
                      value={this.state.age}
                      labelText='Сколько вам лет'
                      isChecked={false}
                      onValueChange={this.onAgeChange}
                      onBlur={this.onBlurAge}
                      isActive={this.state.ageIsActive}
                      isValid={ageBlockIsValid}
                      onFocus={this.onFocusAge}
                      errorText={this.state.ageErrorText}
                    />
                  </Block.Item>
                  <Block.Item>
                    <Block.Sex>
                      <Block.SexWrapper>
                        <Block.Legend>Ваш пол</Block.Legend>
                        <Block.Fieldset>
                          <Block.RadioButton>
                            <Checkbox
                              type='radio'
                              name='sex'
                              label='Жен.'
                              value={3}
                              onValueChange={this.sexChange}
                              isChecked={this.state.sex === 3}
                            />
                          </Block.RadioButton>

                          <Block.RadioButton>
                            <Checkbox
                              type='radio'
                              name='sex'
                              label='Муж.'
                              value={4}
                              onValueChange={this.sexChange}
                              isChecked={this.state.sex === 4}
                            />
                          </Block.RadioButton>
                        </Block.Fieldset>
                      </Block.SexWrapper>
                      <Block.Hint
                        isShow={this.state.sexErrorIsShow}
                        dangerouslySetInnerHTML={{ __html: this.state.sexErrorText }}
                      />
                    </Block.Sex>
                  </Block.Item>
                </Block.Row>

                {Array.isArray(worry) && (
                  <Block.Row>
                    <Block.Item>
                      <AppSelect
                        defaultValue=''
                        defaultMenuIsOpen={false}
                        className='select form-select'
                        classNamePrefix='form-select'
                        isSearchable={false}
                        onChange={this.worryChange}
                        options={worry}
                        styles={colourStyles}
                        hideSelectedOptions={false}
                        placeholder='Что вас беспокоит?'
                        appErrorText={this.state.worryTextError}
                        isValid={worryIsValid}
                      />
                    </Block.Item>
                  </Block.Row>
                )}

                <Block.Row>
                  <Block.Item>
                    <Input
                      type='textarea'
                      name='text'
                      value={this.state.text}
                      labelText='Комментарий'
                      isChecked={false}
                      onValueChange={this.onChange}
                      onBlur={this.onBlurText}
                      isActive={this.state.textIsActive}
                      isValid={textBlockIsValid}
                      onFocus={this.onFocusText}
                      errorText={this.state.textErrorText}
                    />
                  </Block.Item>
                </Block.Row>

                <Block.Row>
                  <Block.Item>
                    <Block.File>
                      <AppFile
                        appErrorText={this.state.fileErrorText}
                        isMultiple={true}
                        onValueChange={this.fileChange}
                        fileRemove={this.fileRemove}
                        files={this.state.fileData}
                      />
                    </Block.File>
                  </Block.Item>
                </Block.Row>

                <Block.Row>
                  <Block.Item>
                    <Input
                      mask={'+9 (999) 999 99 99'}
                      maskChar={''}
                      name='phone'
                      value={this.state.phone}
                      isRequired={true}
                      labelText='Ваш телефон'
                      isChecked={false}
                      onValueChange={this.onPhoneChange}
                      onBlur={this.onBlurPhone}
                      isActive={this.state.phoneIsActive}
                      isValid={phoneBlockIsValid}
                      onFocus={this.onFocusPhone}
                      errorText={this.state.phoneErrorText}
                    />
                  </Block.Item>
                </Block.Row>

                <Block.Row>
                  <Block.Item>
                    <Input
                      name='email'
                      value={this.state.email}
                      isRequired={this.state.emailIsRequired}
                      labelText='Эл. почта для ответа'
                      isChecked={false}
                      onValueChange={this.onEmailChange}
                      onBlur={this.onBlurEmail}
                      isActive={this.state.emailIsActive}
                      isValid={emailBlockIsValid}
                      onFocus={this.onFocusEmail}
                      errorText={this.state.emailErrorText}
                    />
                  </Block.Item>
                </Block.Row>

                <Block.Button>
                  <Button view={'common'} fit={true} onClick={this.onSubmit}>
                    Оставить заявку
                  </Button>
                </Block.Button>

                <Block.Text>
                  Нажимая на&nbsp;кнопку Задать вопрос, я&nbsp;даю&nbsp;
                  <Block.TextLink href='./static/files/accord.pdf' target='_blank'>
                    согласие на&nbsp;обработку персональных данных
                  </Block.TextLink>
                </Block.Text>
              </Block.Inner>
            </Block.Form>
          )}

          {isSent && (
            <Block.Answer>
              <Block.AnswerTitle>Заявка принята</Block.AnswerTitle>
              <Block.AnswerText dangerouslySetInnerHTML={{ __html: answerText }} />
            </Block.Answer>
          )}
        </Block>
      </ThemeProvider>
    );
  }
}
