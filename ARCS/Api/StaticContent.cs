using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace ARCS
{
    public static class StaticContent
    {
        public static void LoadContent()
        {
            _json = new Dictionary<string, string>();
            var staticFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Static");
            foreach (var file in Directory.EnumerateFiles(staticFolder, "*.json", SearchOption.TopDirectoryOnly))
            {
                var fileInfo = new FileInfo(file);
                _json.Add(fileInfo.Name.Substring(0, fileInfo.Name.LastIndexOf('.')), MinifyJson(LoadContent(file)));
            }

            _json["content_structured_filmfest2018"] = StructuredData.Data.Value.FilmFest2018;
        }

        public static IDictionary<string, string> JsonContent
        {
            get => _json;
        }

        private static string LoadContent(string filePath)
        {
            return File.ReadAllText(filePath);
        }

        private static string MinifyJson(string input)
        {
            return Regex.Replace(input, "(\"(?:[^\"\\\\]|\\\\.)*\")|\\s+", "$1");
        }

        public static Dictionary<string, string> _json = null;
    }
}