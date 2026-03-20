<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h1>Lista de videojuegos</h1>
        <table border="2">
          <tr>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Duración</th>
            <th>Personajes</th>
            <th>Precio</th>
          </tr>

          <xsl:for-each select="videojuegos/videojuego">
            <tr>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="plataforma"/></td>
              <td><xsl:value-of select="duracion"/></td>
              <td>
                <xsl:for-each select="personajes/personaje">
                  <xsl:value-of select="."/>
                  <br/>
                </xsl:for-each>
              </td>
              <td><xsl:value-of select="precio"/></td>
            </tr>
          </xsl:for-each>

        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>