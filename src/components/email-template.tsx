import * as React from "react";

interface EmailTemplateProps {
  data: {
    occasion: string;
    otherOccasionDetails: string;
    servings: string;
    otherServingsDetails: string;
    cakeType: string;
    otherCakeTypeDetails: string;
    filling: string;
    otherFillingDetails: string;
    colors: string;
    otherColorsDetails: string;
    allergies: string;
    cakeNote: string;
    specialRequests: string;
    nameSurname: string;
    phone: string;
    deliveryDate: string;
  };
}

// Helper functions
const formatPhone = (phone: string) => {
  if (!phone) return '';
  // Remove all non-digits and format as Turkish phone number
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  }
  return phone;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return dateString;
  }
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => (
  <div style={{ 
    fontFamily: 'Arial, sans-serif', 
    maxWidth: '600px', 
    margin: '0 auto', 
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }}>
    {/* Header */}
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '30px 20px', 
      borderRadius: '8px 8px 0 0', 
      textAlign: 'center',
      borderBottom: '3px solid #e91e63'
    }}>
      <h1 style={{ 
        color: '#333', 
        marginTop: '0', 
        marginBottom: '10px',
        fontSize: '28px'
      }}>🎂 Yeni Pasta Siparişi</h1>
      <p style={{ 
        color: '#666', 
        margin: '0',
        fontSize: '16px'
      }}>Aşağıda sipariş detaylarını bulabilirsiniz</p>
    </div>
    
    {/* Main Content */}
    <div style={{ 
      backgroundColor: 'white', 
      padding: '30px 20px', 
      borderRadius: '0 0 8px 8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      
      {/* Order Details Section */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ 
          color: '#e91e63', 
          borderBottom: '2px solid #f8bbd9', 
          paddingBottom: '10px',
          marginTop: '0',
          fontSize: '20px'
        }}>📋 Sipariş Detayları</h3>
        
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          marginTop: '15px'
        }}>
          <tbody>
            <tr>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold', 
                width: '40%',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>Özel Gün:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {data.occasion}
                {data.otherOccasionDetails && (
                  <div style={{ fontSize: '14px', color: '#777', marginTop: '4px' }}>
                    {data.otherOccasionDetails}
                  </div>
                )}
              </td>
            </tr>
            
            <tr style={{ backgroundColor: '#fafafa' }}>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>Kişi Sayısı:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {data.servings}
                {data.otherServingsDetails && (
                  <div style={{ fontSize: '14px', color: '#777', marginTop: '4px' }}>
                    {data.otherServingsDetails}
                  </div>
                )}
              </td>
            </tr>
            
            <tr>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>Pasta Türü:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {data.cakeType}
                {data.otherCakeTypeDetails && (
                  <div style={{ fontSize: '14px', color: '#777', marginTop: '4px' }}>
                    {data.otherCakeTypeDetails}
                  </div>
                )}
              </td>
            </tr>
            
            <tr style={{ backgroundColor: '#fafafa' }}>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>İçerik & Kat Arası:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {data.filling}
                {data.otherFillingDetails && (
                  <div style={{ fontSize: '14px', color: '#777', marginTop: '4px' }}>
                    {data.otherFillingDetails}
                  </div>
                )}
              </td>
            </tr>
            
            <tr>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>Renkler:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                {data.colors}
                {data.otherColorsDetails && (
                  <div style={{ fontSize: '14px', color: '#777', marginTop: '4px' }}>
                    {data.otherColorsDetails}
                  </div>
                )}
              </td>
            </tr>
            
            {data.allergies && (
              <tr style={{ backgroundColor: '#fff3cd' }}>
                <td style={{ 
                  padding: '12px 0', 
                  fontWeight: 'bold',
                  color: '#856404',
                  borderBottom: '1px solid #f0f0f0'
                }}>⚠️ Alerji Durumu:</td>
                <td style={{ 
                  padding: '12px 0',
                  color: '#856404',
                  borderBottom: '1px solid #f0f0f0'
                }}>{data.allergies}</td>
              </tr>
            )}
            
            {data.cakeNote && (
              <tr style={{ backgroundColor: '#fafafa' }}>
                <td style={{ 
                  padding: '12px 0', 
                  fontWeight: 'bold',
                  color: '#333',
                  borderBottom: '1px solid #f0f0f0'
                }}>Pasta Üzerine Not:</td>
                <td style={{ 
                  padding: '12px 0',
                  color: '#555',
                  borderBottom: '1px solid #f0f0f0',
                  fontStyle: 'italic'
                }}>"{data.cakeNote}"</td>
              </tr>
            )}
            
            {data.specialRequests && (
              <tr>
                <td style={{ 
                  padding: '12px 0', 
                  fontWeight: 'bold',
                  color: '#333'
                }}>Özel İstekler:</td>
                <td style={{ 
                  padding: '12px 0',
                  color: '#555'
                }}>{data.specialRequests}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Customer Information Section */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: '#e91e63', 
          borderBottom: '2px solid #f8bbd9', 
          paddingBottom: '10px',
          marginTop: '0',
          fontSize: '20px'
        }}>👤 Müşteri Bilgileri</h3>
        
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          marginTop: '15px'
        }}>
          <tbody>
            <tr>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold', 
                width: '40%',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>İsim Soyisim:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>{data.nameSurname}</td>
            </tr>
            
            <tr style={{ backgroundColor: '#fafafa' }}>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #f0f0f0'
              }}>Telefon:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <a href={`tel:${data.phone}`} style={{ 
                  color: '#e91e63', 
                  textDecoration: 'none' 
                }}>
                  {formatPhone(data.phone)}
                </a>
              </td>
            </tr>
            
            <tr>
              <td style={{ 
                padding: '12px 0', 
                fontWeight: 'bold',
                color: '#333'
              }}>Teslimat Tarihi:</td>
              <td style={{ 
                padding: '12px 0',
                color: '#555',
                fontWeight: 'bold'
              }}>{formatDate(data.deliveryDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0',
          color: '#666',
          fontSize: '14px'
        }}>
          Bu sipariş otomatik olarak oluşturulmuştur. Herhangi bir sorunuz için lütfen müşteriyle iletişime geçin.
        </p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;