import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import fastify from '/public/svg/skills/fastify.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import numpy from '/public/svg/skills/numpy.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import wordpress from '/public/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'numpy':
      return numpy;
    case 'wordpress':
      return wordpress;
    case 'fastify':
      return fastify;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'canva':
      return canva;
    default:
      break;
  }
}
