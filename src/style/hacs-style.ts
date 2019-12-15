import { CSSResultArray, css } from "lit-element";

import { haStyle } from "./ha-style"
import { navStyle } from "./nav-style"

const baseHacsStyles = css`
    :root {
        font-family: var(--paper-font-body1_-_font-family);
        -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
        font-size: var(--paper-font-body1_-_font-size);
        font-weight: var(--paper-font-body1_-_font-weight);
        line-height: var(--paper-font-body1_-_line-height);

    }
    a {
        text-decoration: none;
        color: var(--link-color, var(--accent-color));
    }
    h1 {
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
        white-space: var(--paper-font-title_-_white-space);
        overflow: var(--paper-font-title_-_overflow);
        text-overflow: var(--paper-font-title_-_text-overflow);
        font-size: var(--paper-font-title_-_font-size);
        font-weight: var(--paper-font-title_-_font-weight);
        line-height: var(--paper-font-title_-_line-height);
        @apply --paper-font-title;
    }
    .title {
        margin-bottom: 8px;
        padding-top: 4px;
        color: var(--primary-text-color);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .addition {
        color: var(--secondary-text-color);
        position: relative;
        height: auto;
        line-height: 1.2em;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    ha-card {
        cursor: pointer;
        margin: 8px;
    }
    ha-icon {
        height: 24px;
        width: 24px;
        margin-right: 16px;
        float: left;
        color: var(--primary-text-color);
        }
        ha-icon.installed {
            color: var(--hacs-status-installed, #126e15);
        }
        ha-icon.pending-upgrade {
            color: var(--hacs-status-pending-update, #ffab40);
        }
        ha-icon.pending-restart {
            color: var(--hacs-status-pending-restart, var(--google-red-500));
        }
        ha-icon.not-loaded {
            color: var(--hacs-status-not-loaded, var(--google-red-500));
        }
        ha-icon.new {
            color: var(--hacs-badge-color, var(--primary-color));
        }
      .card-group {
        margin-top: 24px;
      }

      .card-group {
        color: var(--primary-text-color);
        margin-bottom: 12px;
      }

      ha-card.compact {
        height: 80px !important;
      }

      ha-card.compact .addition {
        height: 1.2em;
        white-space: preliine !important;
      }

      ha-card.compact .title {
        height: 1.2em;
        white-space: preliine !important;
      }

      paper-item.compact {
        margin-bottom: 2px !important;
        white-space: nowrap !important;
      }

      .card-group ha-card {
        --card-group-columns: 5;
        width: calc((100% - 12px * var(--card-group-columns)) / var(--card-group-columns));
        margin: 4px;
        vertical-align: top;
        height: 136px;
      }

      @media screen and (max-width: 2400px) and (min-width: 1801px) {
        .card-group ha-card {
          --card-group-columns: 4;
        }
      }

      @media screen and (max-width: 1800px) and (min-width: 1201px) {
        .card-group ha-card {
          --card-group-columns: 3;
        }
      }

      @media screen and (max-width: 1200px) and (min-width: 601px) {
        .card-group ha-card {
          --card-group-columns: 2;
        }
      }

      @media screen and (max-width: 600px) and (min-width: 0) {
        .card-group ha-card {
          width: 100%;
          margin: 4px 0;
        }
        .content {
          padding: 0;
        }
      }
      hr {
        border-color: var(--accent-color);
      }
      .leftspace {
        margin-left: 8px !important;
      }
`

const mobileHacsStyles = css`
    @media screen and (max-width: 600px) and (min-width: 0) {
      .MobileHide {
          display: none !important;
      }
      .MobileGrid {
          display: grid !important;
          text-align: center !important;
          position: initial !important;
          width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
      }
      hacs-help-button {
          display: none;
      }
    }
`

export const HacsStyle: CSSResultArray = [haStyle, navStyle, baseHacsStyles, mobileHacsStyles]
