import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato';
  font-size: 1.4rem;
  line-height: 1.5;
  color: #292b2c;
}

* {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'Lato';
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  line-height: 1.1;
}

.btn {
  font-size: 1.4rem;
  padding: 0;
}

.cursor-pointer {
  cursor: pointer;
}

/*
 * Override
 */

.modal {
  background: transparent;
  .modal-dialog {
    max-width: 74.5rem;
    margin: 16rem auto 3rem calc(50% - #{$left - menu - width});
    position: relative;
    z-index: 999;
  }
}

.modal-backdrop.show {
  opacity: 0.15;
}


.modal-content {
  border-radius: .2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: none;

}

.modal-header {
  button {
    &.close {
      margin: 0;
      padding: 2rem;
    }
  }
}

.modal-body {
  .video-react {
    background: transparent;
  }
}
form .row {
  text-align: left;
}

.form-check {
  padding-left: 0;
  .form-check-label {
    padding-left: 1.25rem;
  }
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

textarea.form-control {
  height: 10.6rem;
}

.input-group-addon {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary,
.show > .btn-secondary.dropdown-toggle:focus {
  &:focus, &:active, &:hover, &.focus {
    box-shadow: 0 0 0 0px rgba(134,142,150,0.5);
    color: rgb(51, 55, 64);
    background-color: rgb(250, 250, 251) !important;

  }
}

/*
 * Notifications animation
 */

.notification-enter {
  opacity: 0;
  top: -70px;
}

.notification-enter.notification-enter-active {
  opacity: 1;
  transition: all 400ms ease-in;
  top: 0;
}

.notification-exit {
  opacity: 1;
}

.notification-exit.notification-exit-active {
  opacity: 0;
  transition: all 400ms ease-in;
}


::-webkit-scrollbar {
  width: 9px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: #eee;
}

::-webkit-scrollbar-track:hover {
  background-color: #ddd;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

::-webkit-scrollbar-button {
  display: none;
}

/* firefox scrollbar */
/* stylelint-disable */
* {
  scrollbar-color: #bbb #eee;
  scrollbar-width: thin;
}
/* stylelint-enable */

a::-moz-focus-inner {
  border: 0;
}

/*Phuc style*/

html{
width: 100%;
}
body{
  width: 100%;
  padding-bottom: 50rem !important;
}
@media only screen and (max-width: 70em) {
html {
  font-size: 50% !important;
}
}

@media only screen and (max-width: 69em) {
html {
  font-size: 45% !important;
}
.jucPIT {
  font-size: 1.5rem !important;
  margin: 0rem !important;
}
}

@media only screen and (max-width: 52em) {
html {
  font-size: 40% !important;
}
.hALcqx > button{
  min-width: 10rem !important;
}
.iWSbC th, .iWSbC td{
  padding: 0rem  !important;
  }
}

@media only screen and (max-width: 42em) {
html {
  font-size: 35% !important;
}
}

@media only screen and (max-width: 25em) {
  html {
    font-size: 30% !important;
  }
  .gAqude {
    width:17rem !important;
  }
  .fjmiov .adminPageRightWrapper{
    width:calc(100% - 17rem) !important;
  }
  .bfTbFF{
    margin-left: 17rem !important;
    width: 100% !important;
  }
  .iZevoV > .row {
  padding-right: 0rem !important;
  }
  .eoTmEX {
    padding: 0.5rem !important;
  }

  .jHenPa button svg {
    width: 1rem !important;
    height: 1rem !important;
    font-size: 1rem !important;
  }
  .gRKOyR svg:first-of-type{
    width: 1rem !important;
    height: 1rem !important;
    font-size: 1rem !important;
  }
  .exSute > div > button, .exSute > div > button.btn {
    font-size: 1rem !important;

  }
  .cFyHIb {
    padding: 0.5rem !important;
  }
  .dSSiAp{
    padding: 0.1rem !important;
  }
  .fLDKqg .sticky{
    top: 2rem !important;
    left: unset !important;
    right: 0rem !important;
    width: calc(100% - 24rem) !important;
    padding-right: 0rem !important;
  }
  div.fLDKqg .sticky > div > div.col-sm-6.justify-content-end{
    padding-right: 0rem !important;
  }
  .jucPIT {
    padding-right: 1rem !important;
    padding-left: 4.5rem !important;
    
  }
}
.fcVoQv {
     font-size: 1.5rem !important
}
.hpeYUw {
    font-size: 1.5rem !important
}
.ifgYHT {
font-size: 1.5rem !important;
}
.dSZgZT {
    font-size: 1.1rem !important;
}
.dxDZhd{
  font-size: 1.5rem !important;
}
.jzvLGf {
    font-size: 1.3rem !important;
}
.koDjzc {
  font-size: 1.5rem !important;
}
.drnonq{
font-size: 1.5rem !important;
}
.jRuZQN{
font-size: 1.5rem !important;
}
.adminPageRightWrapper{
font-size: 1.5rem !important;
}
.OLDOb>span{
font-size: 1.5rem !important;

}
.kDOQRw{
font-size: 1.5rem !important;
}
.jzvLGf {
font-size: 1.5rem !important;
}
.hwafKU {
font-size: 1.5rem !important;
}
.ijxxKf {
font-size: 1.5rem !important;
}
.cZrdSR {
font-size: 1.5rem !important;
margin: 0rem !important;
}
::-webkit-input-placeholder {
font-size: 1.5rem !important;
}

::-moz-placeholder {
font-size: 1.5rem !important;
}

::-ms-placeholder {
font-size: 1.5rem !important;
}

::placeholder {
font-size: 1.5rem !important;
}

.hYPdBC th, .hYPdBC td {
padding: 0rem  !important;
}

.iRAayL {
font-size: 1.5rem !important;
}
.jRuZQN > div > button, .jRuZQN > div > button.btn {
font-size: 1.5rem !important;
}
.dxDZhd{
padding: 2rem !important;
}
.hoAHyU{
height:5rem !important;
}
.edvyMl{
height:3rem !important;
padding: 0rem 1.5rem !important;
}
.hIUvgD{
margin-right: 0rem !important;
}
.hhZvb button svg {
width: 1rem !important;
height: 1rem !important;
font-size: 1rem !important;
}
.egacxE {
font-size: 1.5rem !important;
}
.jxECjV {
font-size: 1.5rem !important;
}
.BLkfv {
font-size: 1.5rem !important;
}
.wWWLF > button {
min-width: 10rem !important;
}
.bJrvkm {
font-size: 1.5rem !important;
}
.gElfyP {
font-size: 1.5rem !important;
}
.fNwpKs {
font-size: 1.5rem !important;
}
.jRgIEB {
font-size: 1.5rem !important;
}
.iyJfcz {
font-size: 1.5rem !important;
}
.lhwyHl {
font-size: 1.5rem !important;
}
.hEqGmQ {
font-size: 1.5rem !important;
}
.hAwpLS {
font-size: 1.5rem !important;
}
.jVycXa {
font-size: 1.5rem !important;
}
.bNwHVW {
    padding: 1.8rem 3rem 6rem !important;
}

`;

export default GlobalStyle;
