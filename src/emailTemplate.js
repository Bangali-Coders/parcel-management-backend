function emailTemplate(name, id, latitude, longitude, imageUrl) {
    return `
<!DOCTYPE html>
<html
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600;700;800;900"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      sup,
      sub {
        line-height: 0;
        font-size: 75%;
      }

      @media (max-width: 520px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .image_block div.fullWidth {
          max-width: 100% !important;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
    <!--[if mso
      ]><style>
        sup,
        sub {
          font-size: 100% !important;
        }
        sup {
          mso-text-raise: 10%;
        }
        sub {
          mso-text-raise: -10%;
        }
      </style>
    <![endif]-->
  </head>

  <body
    class="body"
    style="
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      class="nl-container"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
      "
    >
      <tbody>
        <tr>
          <td>
            <table
              class="row row-1"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 36px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 43.199999999999996px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >PARCEL MANAGEMENT SYSTEM</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="heading_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: 'Bitter', Georgia, Times,
                                        'Times New Roman', serif;
                                      font-size: 24px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 28.799999999999997px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >Delivering smiles</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="divider_block block-3"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      width="100%"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 1px solid #dddddd;
                                          "
                                        >
                                          <span style="word-break: break-word"
                                            >&#8202;</span
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="heading_block block-4"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 18px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 21.599999999999998px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >Hello, ${name}</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-5"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #444a5b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 17px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: left;
                                      mso-line-height-alt: 20.4px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      This is your digital parcel tracking email from
                                      <em><strong>XYZ Agency</strong></em> -
                                      . Please show the QR code
                                      attached in parcel.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-6"
                              style="
                                height: 20px;
                                line-height: 20px;
                                font-size: 1px;
                              "
                            >
                              &#8202;
                            </div>
                            <table
                              class="image_block block-7"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 5px;
                                    width: 100%;
                                  "
                                >
                                  <div
                                    class="alignment"
                                    align="center"
                                    style="line-height: 10px"
                                  >
                                    <div
                                      class="fullWidth"
                                      style="max-width: 275px"
                                    >
                                      <img src="cid:imageId" alt="Embedded Image" 
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                          border-radius: 15px;
                                        "
                                        width="275"
                                        height="auto"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-2"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: middle;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 20px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 24px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >${id} is the unique ID</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: middle;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 20px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 24px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >The coordinates are : ${latitude} ${longitude}</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-3"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: middle;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="heading_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #1e0e4b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 20px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 24px;
                                    "
                                  >
                                    <span
                                      class="tinyMce-placeholder"
                                      style="word-break: break-word"
                                      >               </span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              class="row row-3"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #444a5b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 19.2px;
                                    "
                                  >
                                    <p style="margin: 0; margin-bottom: 7px">
                                      For any issue related to parcel
                                      contact yus via email. CR&nbsp;
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="divider_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      width="100%"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                    >
                                      <tr>
                                        <td
                                          class="divider_inner"
                                          style="
                                            font-size: 1px;
                                            line-height: 1px;
                                            border-top: 1px solid #dddddd;
                                          "
                                        >
                                          <span style="word-break: break-word"
                                            >&#8202;</span
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="paragraph_block block-3"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #444a5b;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 13px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 15.6px;
                                    "
                                  >
                                    <p style="margin: 10px">
                                      This is an automated email, don't reply to this mail.
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>

    `
}

export default emailTemplate;