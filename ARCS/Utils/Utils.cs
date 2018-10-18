using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace ARCS
{
    public static class Utils
    {
        public static string ConcatListInSingleString(List<string> strs)
        {
            var ret = "";
            foreach (var s in strs)
            {
                if (ret == "")
                {
                    ret += s;
                }
                else
                {
                    ret += " " + s;
                }
            }
            return ret;
        }

        public static string RemoveHtmlTags(string input)
        {
            return Regex.Replace(input, "<.*?>", String.Empty);
        }
    }
}