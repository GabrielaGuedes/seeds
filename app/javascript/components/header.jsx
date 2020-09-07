import React, { useEffect } from 'react';
import {SearchOutlined, DownOutlined} from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/client';
import { students } from "../graphql/students-query.ts";
import { currentStudent } from "../graphql/current-student-query.ts";
import { logout } from '../graphql/logout-mutation.ts';


const Header = () => {
    
    const { data } = useQuery(currentStudent);
    const { data: allData } = useQuery(students);
    const firstStudent =  data ? {...data.currentStudent?.name} : allData ? {...allData.students[0]} : {
      name: 'Nome do usuário',
      firstName: 'Nome'
    }
    const [logoutFromApp] = useMutation(logout);

    useEffect(() => {
      if (data && data.currentStudent === null) {
        window.location.href = "../login";
      }
    });

    const handleLogout = () => {
        logoutFromApp({
            variables: {
                input: {}
            }
        }).then(() => {
            window.location.href = "../login";
        });
    }

    const handleLogoClick = () => {
        window.location.href = "../";
    }

    return <div style={headerContainer}>
        <img src={require('../../assets/images/horizontal_logo.png')} onClick={handleLogoClick} style={{ cursor: 'pointer'}} />
        <div style={inputContainer}>
            <input style={inputField} placeholder={'Pesquise pelo título, autor, categoria, etc...'}/>
            <SearchOutlined />
        </div>
        <div style={userName}>
            <span>{firstStudent?.name}</span>
            <div style={{ cursor: 'pointer' }} onClick={handleLogout}>
               Logout
            </div>
        </div>
    </div>
}

const headerContainer = {
    background: '#45CBCD',
    display: 'flex',
    padding: '10px',
    marginBottom: '40px',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const inputContainer = {
    padding: '15px 10px',
    background: '#fff',
    display: 'flex',
    borderRadius: '5px',
    width: '50vw',
    border: 'solid 1px #E5E5E5',
}

const inputField = {
    background: 'transparent',
    border: 'none',
    flex: 1,
}

const userName = {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
}

const dropDownIcon = {
    marginLeft: '10px'
}

export default Header;