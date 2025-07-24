import * as React from "react";

interface EmailTemplateProps {
  data: {
    occasion: string | null;
    otherOccasionDetails: string | null;
    servings: string | null;
    otherServingsDetails: string | null;
    cakeType: string | null;
    otherCakeTypeDetails: string | null;
    filling: string | null;
    otherFillingDetails: string | null;
    colors: string | null;
    otherColorsDetails: string | null;
    allergies: string | null;
    cakeNote: string;
    specialRequests: string;
    photo: string[] | null;
    nameSurname: string;
    phone: string | null;
    deliveryDate: string | null;
  };
}

const formatPhone = (phone: string | null) => {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 11 && cleaned.startsWith("0")) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  }
  return phone;
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f8f8f8",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px 25px",
        borderRadius: "8px 8px 0 0",
        textAlign: "center",
        borderBottom: "4px solid #e91e63",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h1
        style={{
          color: "#333333",
          marginTop: "0",
          marginBottom: "10px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        🎂 Yeni Pasta Siparişi
      </h1>
      <p
        style={{
          color: "#666666",
          margin: "0",
          fontSize: "17px",
        }}
      >
        Aşağıda sipariş detaylarını bulabilirsiniz
      </p>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "30px 25px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ marginBottom: "35px" }}>
        <h3
          style={{
            color: "#e91e63",
            borderBottom: "2px solid #f8bbd9",
            paddingBottom: "12px",
            marginTop: "0",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          📋 Sipariş Detayları
        </h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  width: "40%",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                Özel Gün:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.occasion}
                {data.otherOccasionDetails && (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#777",
                      marginTop: "4px",
                    }}
                  >
                    {data.otherOccasionDetails}
                  </div>
                )}
              </td>
            </tr>

            <tr style={{ backgroundColor: "#f9f9f9" }}>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                Kişi Sayısı:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.servings}
                {data.otherServingsDetails && (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#777",
                      marginTop: "4px",
                    }}
                  >
                    {data.otherServingsDetails}
                  </div>
                )}
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                Pasta Türü:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.cakeType}
                {data.otherCakeTypeDetails && (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#777",
                      marginTop: "4px",
                    }}
                  >
                    {data.otherCakeTypeDetails}
                  </div>
                )}
              </td>
            </tr>

            <tr style={{ backgroundColor: "#f9f9f9" }}>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                İçerik & Kat Arası:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.filling}
                {data.otherFillingDetails && (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#777",
                      marginTop: "4px",
                    }}
                  >
                    {data.otherFillingDetails}
                  </div>
                )}
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                Renkler:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.colors}
                {data.otherColorsDetails && (
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#777",
                      marginTop: "4px",
                    }}
                  >
                    {data.otherColorsDetails}
                  </div>
                )}
              </td>
            </tr>

            {data.allergies && (
              <tr style={{ backgroundColor: "#fff3cd" }}>
                <td
                  style={{
                    padding: "12px 10px",
                    fontWeight: "bold",
                    color: "#856404",
                    borderBottom: "1px solid #eeeeee",
                  }}
                >
                  ⚠️ Alerji Durumu:
                </td>
                <td
                  style={{
                    padding: "12px 10px",
                    color: "#856404",
                    borderBottom: "1px solid #eeeeee",
                  }}
                >
                  {data.allergies}
                </td>
              </tr>
            )}

            {data.cakeNote && (
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td
                  style={{
                    padding: "12px 10px",
                    fontWeight: "bold",
                    color: "#333",
                    borderBottom: "1px solid #eeeeee",
                  }}
                >
                  Pasta Üzerine Not:
                </td>
                <td
                  style={{
                    padding: "12px 10px",
                    color: "#555",
                    borderBottom: "1px solid #eeeeee",
                    fontStyle: "italic",
                  }}
                >
                  &quot;{data.cakeNote}&quot;
                </td>
              </tr>
            )}

            {data.specialRequests && (
              <tr>
                <td
                  style={{
                    padding: "12px 10px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Özel İstekler:
                </td>
                <td
                  style={{
                    padding: "12px 10px",
                    color: "#555",
                  }}
                >
                  {data.specialRequests}
                </td>
              </tr>
            )}

            {data.photo && data.photo.length > 0 && (
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <td
                  style={{
                    padding: "12px 10px",
                    fontWeight: "bold",
                    color: "#333",
                    borderBottom: "1px solid #eeeeee",
                  }}
                >
                  Yüklenen Fotoğraflar:
                </td>
                <td
                  style={{
                    padding: "12px 10px",
                    color: "#555",
                    borderBottom: "1px solid #eeeeee",
                  }}
                >
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {data.photo.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Uploaded Photo ${index + 1}`}
                        width={200} 
                        height={150} 
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          flex: "1 1 auto", 
                          minWidth: "100px", 
                        }}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            color: "#e91e63",
            borderBottom: "2px solid #f8bbd9",
            paddingBottom: "12px",
            marginTop: "0",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          👤 Müşteri Bilgileri
        </h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  width: "40%",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                İsim Soyisim:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                {data.nameSurname}
              </td>
            </tr>

            <tr style={{ backgroundColor: "#f9f9f9" }}>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                Telefon:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                <a
                  href={`tel:${data.phone}`}
                  style={{
                    color: "#e91e63",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {formatPhone(data.phone)}
                </a>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "12px 10px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Teslimat Tarihi:
              </td>
              <td
                style={{
                  padding: "12px 10px",
                  color: "#555",
                  fontWeight: "bold",
                }}
              >
                {formatDate(data.deliveryDate)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px 25px",
          backgroundColor: "#ececec",
          borderRadius: "6px",
          textAlign: "center",
          color: "#555",
          fontSize: "14px",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <p style={{ margin: "0" }}>
          Yeni bir pasta siparişi alındı. Hayırlı olsun. Bol kazançların olsun.
        </p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;
